var menusId = new Array()

chrome.contextMenus.create({
    id: "appendRecordParent",
    title: 'Добавить в документ...',
    contexts: ["selection"],
})

chrome.contextMenus.create({
    id: "createNewDocument",
    title: "Создать новый документ",
    contexts: ["all"]
})

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "createNewDocument") {
        let documentName = prompt("Введите имя нового документа:");
        let req = new XMLHttpRequest();
        req.open("POST", "http://localhost:3000/api/v1/documents/document");
        req.setRequestHeader('content-type', 'text/plain')
        req.send(documentName)
        console.log(req.response)
    }
});

function createContextMenus(element) {
    let menuId = "document"+element.ID;
    chrome.contextMenus.create({
        id: menuId,
        parentId: "appendRecordParent",
        title: element.Title,
        contexts: ["selection"],
    })
    if (menusId.includes(menuId)) {
        return
    }
    chrome.contextMenus.onClicked.addListener(function(clickData) {
        if (clickData.menuItemId == menuId) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection", documentId: element.ID}, function(response) {
                   console.log(response.body);
                }); 
              }); 
        }
    })
    menusId.push(menuId)
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == 'updateContextMenu') {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "http://localhost:3000/api/v1/documents", false)
        xhr.send();
        let documents = JSON.parse(xhr.response);
        documents.forEach(element => {
            createContextMenus(element)
        });
    }
});