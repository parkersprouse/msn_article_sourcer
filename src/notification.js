import { waitForElm } from './util.js';

(() => {
  try {
    browser.runtime.onMessage.addListener((message) => {
      if (message === 'sourceit') {
        if (document.querySelector('.msn-sourcer-notice')) return;

        waitForElm('link[rel="canonical"]')
          .then((canonical) => {
            if (!canonical) return;
            const source = canonical.getAttribute('href');
            if (!source) return;

            const new_styles = document.createElement('style');
            const css = `
              div.msn-sourcer-notice {
                background: #3c414d;
                border-radius: 4px;
                border: 1px solid #090d13;
                top: 15px;
                color: #e5e9f0;
                height: auto;
                padding: 8px;
                position: fixed;
                right: 15px;
                width: 400px;
                z-index: 99999;
              }

              div.msn-sourcer-notice .notice-title {
                margin-bottom: 0.75rem;
              }

              div.msn-sourcer-notice .orig-source-link {
                color: #ebcb8b;
                text-decoration: none;
              }

              div.msn-sourcer-notice .orig-source-link:hover {
                text-decoration: underline;
              }

              div.msn-sourcer-notice .close-btn {
                background: none;
                border: none;
                color: #b9b9b9;
                cursor: pointer;
                height: 24px;
                padding: 0;
                position: absolute;
                right: 8px;
                top: 8px;
                width: 24px;
              }

              div.msn-sourcer-notice .close-btn:hover {
                color: #bf616a;
              }
            `;
            if (new_styles.styleSheet) {
              new_styles.styleSheet.cssText = css;
            } else {
              new_styles.append(document.createTextNode(css));
            }

            document.querySelector('head').append(new_styles);

            const notice = document.createElement('div');
            notice.classList.add('msn-sourcer-notice');

            const close_btn = document.createElement('button');
            close_btn.classList.add('close-btn');
            close_btn.addEventListener('click', () => {
              document.querySelector('.msn-sourcer-notice').remove();
            });
            close_btn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
              </svg>`;

            const details = document.createElement('div');
            details.classList.add('notice-title');
            details.textContent = 'Original Article:';

            const source_link = document.createElement('a');
            source_link.classList.add('orig-source-link');
            source_link.textContent = source;
            source_link.setAttribute('href', source);

            notice.append(details);
            notice.append(source_link);
            notice.append(close_btn);
            document.body.append(notice);
          });
      }
    });
  } catch {}
})();

// (() => {

// })();
