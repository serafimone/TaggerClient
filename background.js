function getword(info,tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText
    });
  }

chrome.contextMenus.create({
    title: "Сохранить выделенный текст в текущий документ",
    contexts: ["selection"],
    onclick: getword
})