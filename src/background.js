function listener(request) {
  if (request.frameId === 0) {
    browser.tabs
      .sendMessage(request.tabId, 'sourceit')
      .catch((error) => {
        console.error('Error sending message:');
        console.error(error);
      });
  }
}

browser.webNavigation.onCompleted.addListener(
  listener,
  {
    url: [{ hostContains: '.msn.' }],
  },
);
