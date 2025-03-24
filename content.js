console.log("content.js injected!");
console.log("current page URL:", location.href);

// const observer = new MutationObserver(() => {
//   // 가격 정보나 특정 DOM이 나타나면 fetch 후킹 또는 DOM 조작 실행
//   if (document.querySelector(".price_default")) {
//     console.log("가격 정보 DOM 등장!");
//     observer.disconnect(); // 감지 완료 후 중지
//   }
// });
// observer.observe(document.body, { childList: true, subtree: true });

// 네이버 부동산 페이지에서 가격을 변경하는 예시
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOMContentLoaded");
(function () {
  const priceElements = document.querySelectorAll(".price_default");

  if (priceElements.length > 0) {
    priceElements.forEach((priceElement) => {
      priceElement.textContent = "변경된 가격";
    });
  } else {
    console.log(
      "가격 정보를 표시하는 요소(.price_default)를 찾을 수 없습니다."
    );
  }
})();
// });

(function () {
  // 1. fetch 후킹
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const [url] = args;
    console.log("[감지됨] fetch 1 →", url);

    // 감지할 API 조건 설정
    if (url.includes("/api/complexes/single-markers/2.0")) {
      console.log("[감지됨] fetch 2 →", url);

      // 2. 추가 API 호출
      // fetch("https://your-custom-api.com/custom-data")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log("[추가 API 응답]", data);

      //     // 3. DOM 조작
      //     const targetEls = document.querySelectorAll(".price");
      //     targetEls.forEach((el, idx) => {
      //       el.textContent = `맞춤가격: ${data[idx]?.price || "N/A"}`;
      //     });
      //   });
    }

    return originalFetch.apply(this, args);
  };
})();
