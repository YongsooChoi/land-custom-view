console.log("content.js");

// 네이버 부동산 페이지에서 가격을 변경하는 예시
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOMContentLoaded");
let priceElements = document.querySelectorAll(".price_default");

priceElements.forEach((priceElement) => {
  priceElement.textContent = "변경된 가격"; // 가격을 변경
});
// });
