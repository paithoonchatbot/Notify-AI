function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function processForm(formObject){
  var ss= SpreadsheetApp.openById('154BLDK46dlyBfdub-6KsuXR53m1aVlbHPibrFWDBuMg');
  var ws=ss.getSheets()[0]
  ws.appendRow([
    new Date(),
    formObject.television,
    formObject.radio,
    formObject.newspaper,
    formObject.sale,
    formObject.name,
    "'"+formObject.phone,
      
  ]);
  var token = 'MCyjbEMZitgVE6aqoZoeWI7agLiYhXQsDxV4HLDsSpg'
  var msg = 'Paithoon Financial Analyzer 2022 '+formObject.Sale +' '+formObject.name+'\n Tel Number '+formObject.phone
  NotifyApp.sendNotify(token,msg)
}
