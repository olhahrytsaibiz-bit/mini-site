declare global {
  interface Window {
    Wayforpay?: new () => {
      run: (
        params: Record<string, unknown>,
        onApproved?: () => void,
        onDeclined?: () => void,
        onPending?: () => void
      ) => void;
    };
  }
}

import { trackInitiateCheckout } from "@/lib/analytics";

const SCRIPT_URL = "https://secure.wayforpay.com/server/pay-widget.js";

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (typeof window.Wayforpay === "function") return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_URL;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("Failed to load WayForPay widget"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export async function startCheckout(): Promise<void> {
  try {
    trackInitiateCheckout();
    await loadScript();
    const res = await fetch("/api/checkout", { method: "POST" });
    if (!res.ok) throw new Error("Checkout init failed");
    const params = await res.json();
    const Wayforpay = window.Wayforpay;
    if (!Wayforpay) throw new Error("Widget not loaded");
    const wfp = new Wayforpay();
    wfp.run(
      params,
      () => {
        window.location.href = "/thanks";
      },
      () => {},
      () => {}
    );
  } catch (e) {
    console.error(e);
    // Fallback: send user to a static info page
    alert("Оплата тимчасово недоступна. Спробуйте ще раз пізніше.");
  }
}

export {};
