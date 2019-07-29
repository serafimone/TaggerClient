function getSelectionHTML(id) {
  var userSelection;
  if (window.getSelection) {
    // W3C Ranges
    userSelection = window.getSelection ();
    // Get the range:
    if (userSelection.getRangeAt)
      var range = userSelection.getRangeAt (0);
    else {
      var range = document.createRange ();
      range.setStart (userSelection.anchorNode, userSelection.anchorOffset);
      range.setEnd (userSelection.focusNode, userSelection.focusOffset);
    }
    // And the HTML:
    var clonedSelection = range.cloneContents();
    var div = document.createElement ('div');
    div.appendChild (clonedSelection);
    var elements = div.getElementsByTagName("p");
    console.log(elements)
    Array.from(elements).forEach(element => {
      var xhr = new XMLHttpRequest()
      xhr.open('POST', "http://localhost:3000/api/v1/documents/"+id.toString()+"/records/record", false)
      xhr.setRequestHeader('content-type', 'text/plain')
      xhr.send(element.innerText)
    });
    return elements;
  } else if (document.selection) {
    // Explorer selection, return the HTML
    userSelection = document.selection.createRange ();
    return userSelection.htmlText;
  } else {
    return '';
  }
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request)
    if (request.method == "getSelection") {
      console.log(request.documentId)
      var selection = getSelectionHTML(request.documentId);
    }
  });

  document.addEventListener("mousedown", function(event){
    if (event.button !== 2) {
        return false;
    }
    var selected = window.getSelection().toString();
        if(event.button == 2 && selected != '') {
                //get selected text and send request to bkgd page to create menu
            chrome.extension.sendMessage({
                   'message': 'updateContextMenu', 
                   'selection': true});
        } else {
        chrome.extension.sendMessage({
                   'message': 'updateContextMenu',
                   'selection': false});
        }
}, true);