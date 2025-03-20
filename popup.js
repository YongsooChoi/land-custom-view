document
  .getElementById("changePriceButton")
  .addEventListener("click", async function () {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab && tab.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"],
      });
    } else {
      console.error("현재 활성 탭을 찾을 수 없습니다.");
    }
  });
