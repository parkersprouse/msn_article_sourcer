// "default_popup": "popup.html",

// import { waitForElm } from './util.js';

// waitForElm('link[rel="canonical"]')
//   .then((canonical) => {
//     if (!canonical) return;
//     const source = canonical.getAttribute('href');
//     if (!source) return;
//   });

(() => {
  try {
    console.log('within popup; onload');
    browser.runtime.onMessage.addListener((message) => {
      console.log('within popup; onmessage');
      console.log(message);
    });
  } catch {}
})();
