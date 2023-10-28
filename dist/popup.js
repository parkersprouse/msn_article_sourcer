(()=>{try{console.log("within popup; onload"),browser.runtime.onMessage.addListener(o=>{console.log("within popup; onmessage"),console.log(o)})}catch{}})();
