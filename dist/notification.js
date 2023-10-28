function u(e){return new Promise(o=>{if(document.querySelector(e))o(document.querySelector(e));else{let t=new MutationObserver(n=>{document.querySelector(e)&&(t.disconnect(),o(document.querySelector(e)))});t.observe(document.body,{childList:!0,subtree:!0})}})}(()=>{try{browser.runtime.onMessage.addListener(e=>{if(e==="sourceit"){if(document.querySelector(".msn-sourcer-notice"))return;u('link[rel="canonical"]').then(o=>{if(!o)return;let t=o.getAttribute("href");if(!t)return;let n=document.createElement("style"),d=`
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
            `;n.styleSheet?n.styleSheet.cssText=d:n.append(document.createTextNode(d)),document.querySelector("head").append(n);let r=document.createElement("div");r.classList.add("msn-sourcer-notice");let c=document.createElement("button");c.classList.add("close-btn"),c.addEventListener("click",()=>{document.querySelector(".msn-sourcer-notice").remove()}),c.innerHTML=`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
              </svg>`;let s=document.createElement("div");s.classList.add("notice-title"),s.textContent="Original Article:";let i=document.createElement("a");i.classList.add("orig-source-link"),i.textContent=t,i.setAttribute("href",t),r.append(s),r.append(i),r.append(c),document.body.append(r)})}})}catch{}})();
