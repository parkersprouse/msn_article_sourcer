browser.webNavigation.onCompleted.addListener(async r=>{if(r.frameId===0)try{browser.tabs.sendMessage(r.tabId,"sourceit")}catch(e){console.error("Error sending message:"),console.error(e)}},{url:[{hostContains:".msn."}]});browser.browserAction.onClicked.addListener(async r=>{try{browser.tabs.sendMessage(r.id,"sourceit")}catch(e){console.error("Error sending message:"),console.error(e)}});browser.tabs.onActivated.addListener(async({tabId:r})=>{try{(await browser.tabs.get(r)).url.match(/^(http|https):\/\/\w*\.*msn\.com/g)?browser.browserAction.enable():browser.browserAction.disable()}catch{}});
