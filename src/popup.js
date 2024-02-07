(() => {
  try {
    console.log('within popup; onload');
    browser.runtime.onMessage.addListener((message) => {
      console.log('within popup; onmessage');
      console.log(message);
    });
  } catch { /* Don't worry about any errors from here */ }
})();
