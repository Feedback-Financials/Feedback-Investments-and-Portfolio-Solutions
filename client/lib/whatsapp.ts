export const WHATSAPP_PHONE = "917023655404";

function isMobileUA() {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  const deepLink = `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${text}`;
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
  const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`;

  // Prefer native app on mobile
  if (isMobileUA()) return deepLink;
  return webUrl;
}

export function openWhatsApp(message: string) {
  const text = encodeURIComponent(message);
  const deepLink = `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${text}`;
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`; // secondary fallback
  const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`; // desktop fallback

  if (typeof window === "undefined") return deepLink;

  const isMobile = isMobileUA();

  if (isMobile) {
    // Attempt to open the native app first
    window.location.href = deepLink;
    // If it fails (app not installed), fallback gracefully after a short delay
    setTimeout(() => {
      // If still on the same page (app not opened), fallback to wa.me which can route to store/app
      if (!document.hidden) window.location.href = waUrl;
    }, 1200);
    return deepLink;
  }

  // Desktop: open WhatsApp Web in a new tab
  window.open(webUrl, "_blank", "noopener,noreferrer");
  return webUrl;
}
