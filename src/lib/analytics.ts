// Minimal Meta Pixel helpers.
// Base pixel + initial PageView are fired from index.html.
// These helpers handle SPA route changes and conversion events.

declare global {
  interface Window {
    fbq?: (
      action: "track" | "trackCustom",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

function fb(...args: Parameters<NonNullable<Window["fbq"]>>): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  try {
    window.fbq(...args);
  } catch {
    /* ignore — never break the UI for analytics */
  }
}

export function trackPageView(): void {
  fb("track", "PageView");
}

export function trackInitiateCheckout(value = 9, currency = "EUR"): void {
  fb("track", "InitiateCheckout", {
    value,
    currency,
    content_name: "Точка відліку",
    content_category: "mini-course",
  });
}

export function trackPurchase(value = 9, currency = "EUR"): void {
  fb("track", "Purchase", {
    value,
    currency,
    content_name: "Точка відліку",
    content_type: "product",
    content_ids: ["tochka-vidliku"],
  });
}
