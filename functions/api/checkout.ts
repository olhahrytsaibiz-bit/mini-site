import CryptoJS from "crypto-js";

interface Env {
  WAYFORPAY_SECRET: string;
}

// === WayForPay merchant config ===
// Make sure WAYFORPAY_SECRET in Cloudflare env belongs to THIS merchant account.
const MERCHANT_ACCOUNT = "mini_olhafair_com";
const MERCHANT_DOMAIN = "mini.olhafair.com";
const PRODUCT_NAME = "Точка відліку — міні-курс";
const AMOUNT = "9";          // primary currency amount
const CURRENCY = "EUR";
const PRODUCT_COUNT = "1";
const PRODUCT_PRICE = "9";   // must match AMOUNT for a single-item order

function genOrderRef(): string {
  const ts = Date.now();
  const rnd = Math.random().toString(36).slice(2, 8);
  return `OL${ts}${rnd}`;
}

export const onRequestPost: PagesFunction<Env> = async ({ env }) => {
  if (!env.WAYFORPAY_SECRET) {
    return new Response(
      JSON.stringify({ error: "Payment system not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const orderReference = genOrderRef();
  const orderDate = String(Math.floor(Date.now() / 1000));

  // Signature string per WayForPay Purchase docs:
  //   merchantAccount;merchantDomainName;orderReference;orderDate;amount;currency;
  //   productName[0..n];productCount[0..n];productPrice[0..n]
  const stringToSign = [
    MERCHANT_ACCOUNT,
    MERCHANT_DOMAIN,
    orderReference,
    orderDate,
    AMOUNT,
    CURRENCY,
    PRODUCT_NAME,
    PRODUCT_COUNT,
    PRODUCT_PRICE,
  ].join(";");

  const merchantSignature = CryptoJS.HmacMD5(
    stringToSign,
    env.WAYFORPAY_SECRET
  ).toString();

  // IMPORTANT: values returned to the widget MUST exactly match the ones
  // used in the signature string (same type/format). We pass strings everywhere
  // so client-side JSON.stringify cannot reformat numbers.
  return new Response(
    JSON.stringify({
      merchantAccount: MERCHANT_ACCOUNT,
      merchantDomainName: MERCHANT_DOMAIN,
      authorizationType: "SimpleSignature",
      merchantSignature,
      orderReference,
      orderDate: Number(orderDate), // widget expects number for orderDate
      amount: Number(AMOUNT),
      currency: CURRENCY,
      productName: [PRODUCT_NAME],
      productPrice: [Number(PRODUCT_PRICE)],
      productCount: [Number(PRODUCT_COUNT)],
      language: "UA",
      returnUrl: `https://${MERCHANT_DOMAIN}/thanks`,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
