browser.webNavigation.onCompleted.addListener(
  async (request) => {
    if (request.frameId === 0) {
      try {
        browser.tabs.sendMessage(request.tabId, 'sourceit');
      } catch (error) {
        console.error('Error sending message:');
        console.error(error);
      }
    }
  },
  {
    url: [{ hostContains: '.msn.' }],
  }
);

browser.browserAction.onClicked.addListener(async (tab) => {
  try {
    browser.tabs.sendMessage(tab.id, 'sourceit');
  } catch (error) {
    console.error('Error sending message:');
    console.error(error);
  }
});
