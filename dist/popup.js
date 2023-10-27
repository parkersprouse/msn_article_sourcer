function u(e){return new Promise(o=>{if(document.querySelector(e))o(document.querySelector(e));else{let t=new MutationObserver(r=>{document.querySelector(e)&&(t.disconnect(),o(document.querySelector(e)))});t.observe(document.body,{childList:!0,subtree:!0})}})}(()=>{try{browser.runtime.onMessage.addListener(e=>{e==="sourceit"&&u('link[rel="canonical"]').then(o=>{if(!o)return;let t=o.getAttribute("href");if(!t)return;let r=document.createElement("style"),d=`
              div.msn-sourcer-notice {
                background: #3b4252;
                border-radius: 4px;
                border: 1px solid #090d13;
                top: 15px;
                color: #e5e9f0;
                height: fit-content;
                max-width: 400px;
                min-width: 200px;
                padding: 8px;
                position: fixed;
                right: 15px;
                width: fit-content;
                z-index: 1000;
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
            `;r.styleSheet?r.styleSheet.cssText=d:r.append(document.createTextNode(d)),document.querySelector("head").append(r);let n=document.createElement("div");n.classList.add("msn-sourcer-notice");let i=document.createElement("button");i.classList.add("close-btn"),i.addEventListener("click",()=>{n.style.display="none"}),i.innerHTML=`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
              </svg>`;let s=document.createElement("div");s.classList.add("notice-title"),s.textContent="Original Source:";let c=document.createElement("a");c.classList.add("orig-source-link"),c.textContent=t,c.setAttribute("href",t),n.append(s),n.append(c),n.append(i),document.body.append(n)})})}catch{}})();
