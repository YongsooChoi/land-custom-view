chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // 페이지에서 실행할 코드
      console.log("익스텐션 아이콘 클릭됨");
    },
  });
});
