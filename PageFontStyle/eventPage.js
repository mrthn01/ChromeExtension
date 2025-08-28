chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
  });
  chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (tab.url && tab.url.startsWith("https://developer.chrome.com/")) {
      await chrome.action.enable(tabId);
    } else {
      await chrome.action.disable(tabId);
    }
  });