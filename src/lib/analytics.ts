// Unified analytics — fires both Meta Pixel and GA4 on the same events.
// Base pixels + initial config are in index.html.
// Everything else flows through these helpers.

declare global {
  interface Window {
    fbq?: (
      action: "track" | "trackCustom",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function fb(...args: Parameters<NonNullable<Window["fbq"]>>): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  try {
    window.fbq(...args);
  } catch {
    /* never break UI for analytics */
  }
}

function ga(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  try {
    window.gtag(...args);
  } catch {
    /* never break UI for analytics */
  }
}

const ITEM = {
  item_id: "tochka-vidliku",
  item_name: "Точка відліку",
  price: 9,
  quantity: 1,
};

export function trackPageView(): void {
  fb("track", "PageView");
  // GA4: send manual page_view with current location
  if (typeof window !== "undefined") {
    ga("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

export function trackInitiateCheckout(value = 9, currency = "EUR"): void {
  fb("track", "InitiateCheckout", {
    value,
    currency,
    content_name: "Точка відліку",
    content_category: "mini-course",
  });
  ga("event", "begin_checkout", {
    currency,
    value,
    items: [ITEM],
  });
}

export function trackPurchase(
  value = 9,
  currency = "EUR",
  transactionId?: string
): void {
  fb("track", "Purchase", {
    value,
    currency,
    content_name: "Точка відліку",
    content_type: "product",
    content_ids: ["tochka-vidliku"],
  });
  ga("event", "purchase", {
    transaction_id: transactionId || `web-${Date.now()}`,
    currency,
    value,
    items: [ITEM],
  });
}
