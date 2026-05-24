import CryptoJS from "crypto-js";

interface Env {
  WAYFORPAY_SECRET: string;
}

// Trigger URL provided by SendPulse for the bot-flow event
const SENDPULSE_EVENT_URL =
  "https://events.sendpulse.com/events/id/7af2fc289fe24582b10a0929bdd1e7ac/9406565";

interface WayForPayPayload {
  merchantAccount?: string;
  orderReference?: string;
  merchantSignature?: string;
  amount?: number | string;
  currency?: string;
  authCode?: string;
  email?: string;
  phone?: string;
  cardPan?: string;
  transactionStatus?: string;
  reasonCode?: number | string;
  paymentSystem?: string;
}

function isApproved(status: string | undefined): boolean {
  return status === "Approved";
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: WayForPayPayload;
  try {
    payload = await request.json();
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  if (!env.WAYFORPAY_SECRET) {
    return new Response("Server misconfigured", { status: 500 });
  }

  // 1) Verify the signature WayForPay sent us:
  //    merchantAccount;orderReference;amount;currency;authCode;cardPan;transactionStatus;reasonCode
  const sigString = [
    payload.merchantAccount ?? "",
    payload.orderReference ?? "",
    String(payload.amount ?? ""),
    payload.currency ?? "",
    payload.authCode ?? "",
    payload.cardPan ?? "",
    payload.transactionStatus ?? "",
    String(payload.reasonCode ?? ""),
  ].join(";");

  const expectedSig = CryptoJS.HmacMD5(sigString, env.WAYFORPAY_SECRET).toString();

  if (payload.merchantSignature !== expectedSig) {
    // Don't leak details — just reject
    return new Response("Invalid signature", { status: 401 });
  }

  // 2) Fire SendPulse event only on confirmed payments
  if (isApproved(payload.transactionStatus)) {
    try {
      await fetch(SENDPULSE_EVENT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: payload.email ?? "",
          phone: payload.phone ?? "",
          // optional analytics — SendPulse will store as variables
          order_reference: payload.orderReference ?? "",
          amount: payload.amount ?? "",
          currency: payload.currency ?? "",
          product_name: "Точка відліку",
        }),
      });
    } catch (e) {
      // Log to Cloudflare Workers logs; don't break ack to WayForPay
      console.error("SendPulse trigger failed", e);
    }
  }

  // 3) Acknowledge to WayForPay (mandatory — otherwise they keep retrying)
  const time = Math.floor(Date.now() / 1000);
  const ackString = [payload.orderReference ?? "", "accept", String(time)].join(";");
  const ackSig = CryptoJS.HmacMD5(ackString, env.WAYFORPAY_SECRET).toString();

  return new Response(
    JSON.stringify({
      orderReference: payload.orderReference ?? "",
      status: "accept",
      time,
      signature: ackSig,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
