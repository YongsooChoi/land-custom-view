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

      // 현재 탭에 content script로 메시지 전송
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              type: "apiDetected",
              url: details.url,
            },
            (response) => {
              if (chrome.runtime.lastError) {
                console.warn(
                  "❗ 메시지 실패:",
                  chrome.runtime.lastError.message
                );
              } else {
                console.log("✅ content로부터 응답:", response);
              }
            }
          );
        }
      });
    }
  },
  {
    urls: ["https://new.land.naver.com/*"],
    types: ["xmlhttprequest"],
  }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "userClickedSomething") {
    console.log("✅ content에서 메시지 도착!");
  }
});
