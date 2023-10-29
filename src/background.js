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
  },
);

browser.browserAction.onClicked.addListener(async (tab) => {
  try {
    browser.tabs.sendMessage(tab.id, 'sourceit');
  } catch (error) {
    console.error('Error sending message:');
    console.error(error);
  }
});

browser.tabs.onActivated.addListener(async ({ tabId }) => {
  try {
    const tab = await browser.tabs.get(tabId);
    const match = tab.url.match(/^(http|https):\/\/\w*\.*msn\.com/g);
    if (match) {
      await browser.browserAction.setIcon({ path: 'img/logo.svg' });
      browser.browserAction.enable();
    } else {
      await browser.browserAction.setIcon({ path: 'img/logo_disabled.svg' });
      browser.browserAction.disable();
    }
  } catch {}
});
