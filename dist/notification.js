function a(e){return new Promise(n=>{if(document.querySelector(e))n(document.querySelector(e));else{let t=new MutationObserver(o=>{document.querySelector(e)&&(t.disconnect(),n(document.querySelector(e)))});t.observe(document.body,{childList:!0,subtree:!0})}})}(()=>{try{browser.runtime.onMessage.addListener(async e=>{if(e==="sourceit"){if(document.querySelector(".msn-sourcer-notice"))return;let n=await a('link[rel="canonical"]');if(!n)return;let t=n.getAttribute("href");if(!t)return;let o=document.createElement("style");o.id="msn-sourcer-styles";let d=`
          div.msn-sourcer-notice {
            background: #2b2b34;
            border-radius: 4px;
            box-shadow: 0px 0px 8px black;
            top: 15px;
            color: #e5e9f0;
            height: auto;
            padding: 0.75rem;
            position: fixed;
            right: 15px;
            width: 400px;
            z-index: 99999;
          }

          div.msn-sourcer-notice .notice-title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
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
        `;o.styleSheet?o.styleSheet.cssText=d:o.append(document.createTextNode(d)),document.querySelector("head").append(o);let r=document.createElement("div");r.classList.add("msn-sourcer-notice");let c=document.createElement("button");c.classList.add("close-btn"),c.addEventListener("click",()=>{document.querySelector(".msn-sourcer-notice").remove(),document.querySelector("#msn-sourcer-styles").remove()}),c.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>`;let s=document.createElement("div");s.classList.add("notice-title"),s.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
          <span>Original Article:</span>`;let i=document.createElement("a");i.classList.add("orig-source-link"),i.textContent=t,i.setAttribute("href",t),r.append(s),r.append(i),r.append(c),document.body.append(r)}})}catch{}})();
