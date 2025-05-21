// Hiệu ứng chữ động có thể nâng cao bằng thư viện Typed.js hoặc đơn giản như sau
// Tự động thay đổi text (optional)
const span = document.querySelector(".animated-text span");
const texts = ["Hào Esports", "nhà phát triển web", "dev bot Telegram"];
let index = 0;

setInterval(() => {
  span.textContent = texts[index];
  index = (index + 1) % texts.length;
}, 3000);
