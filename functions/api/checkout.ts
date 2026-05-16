import CryptoJS from "crypto-js";

interface Env {
  WAYFORPAY_SECRET: string;
}

const MERCHANT_ACCOUNT = "www_instagram_com_72371";
const MERCHANT_DOMAIN = "mini.olhafair.com";
const PRODUCT_NAME = "Точка відліку — міні-курс";
const AMOUNT = 9;
const CURRENCY = "EUR";

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
  const orderDate = Math.floor(Date.now() / 1000);

  // Per WayForPay docs: merchantAccount;merchantDomainName;orderReference;orderDate;amount;currency;
  // productName[0];...;productCount[0];...;productPrice[0];...
  const stringToSign = [
    MERCHANT_ACCOUNT,
    MERCHANT_DOMAIN,
    orderReference,
    String(orderDate),
    String(AMOUNT),
    CURRENCY,
    PRODUCT_NAME,
    "1",
    String(AMOUNT),
  ].join(";");

  const merchantSignature = CryptoJS.HmacMD5(stringToSign, env.WAYFORPAY_SECRET).toString();

  return new Response(
    JSON.stringify({
      merchantAccount: MERCHANT_ACCOUNT,
      merchantDomainName: MERCHANT_DOMAIN,
      authorizationType: "SimpleSignature",
      merchantSignature,
      orderReference,
      orderDate,
      amount: AMOUNT,
      currency: CURRENCY,
      productName: [PRODUCT_NAME],
      productPrice: [AMOUNT],
      productCount: [1],
      language: "UA",
      returnUrl: `https://${MERCHANT_DOMAIN}/thanks`,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
