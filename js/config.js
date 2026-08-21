/* ================================================
   DigiSite — تنظیمات سراسری
   فقط همین فایل را برای تغییر اطلاعات تماس ویرایش کنید
   ================================================ */

const DIGISITE_CONFIG = {
  // نام کاربری تلگرام را بدون @ وارد کنید
  TELEGRAM_USERNAME: "alireza_digisite",

  // شماره تماس نمایشی
  PHONE_DISPLAY: "0938 303 1035",

  // شماره برای لینک tel:
  PHONE_TEL: "+989383031035",
};

DIGISITE_CONFIG.TELEGRAM_URL = `https://t.me/${DIGISITE_CONFIG.TELEGRAM_USERNAME}`;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-telegram-link]").forEach((el) => {
    el.setAttribute("href", DIGISITE_CONFIG.TELEGRAM_URL);
  });
  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.setAttribute("href", `tel:${DIGISITE_CONFIG.PHONE_TEL}`);
  });
  document.querySelectorAll("[data-phone-display]").forEach((el) => {
    el.textContent = DIGISITE_CONFIG.PHONE_DISPLAY;
  });
});