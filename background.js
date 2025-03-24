console.log("✅ background.js loaded");

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // 페이지에서 실행할 코드
      console.log("익스텐션 아이콘 클릭됨");
    },
  });
});

chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.url.includes("/api/complexes/single-markers/2.0")) {
      console.log("부동산 리스트 API 호출됨");
      // 여기에 콜백 처리 로직 작성
    }
  },
  {
    urls: ["https://new.land.naver.com/*"],
    types: ["xmlhttprequest"],
  }
);
