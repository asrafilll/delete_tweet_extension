document.getElementById("startDelete").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      window.postMessage({ type: "START_DELETE_TWEETS" }, "*");
    },
  });
});

document.getElementById("stopDelete").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      window.postMessage({ type: "STOP_DELETE_TWEETS" }, "*");
    },
  });
});
