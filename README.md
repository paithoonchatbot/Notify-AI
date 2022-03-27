function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
function processForm(formObject){
  var ss= SpreadsheetApp.openById('1ILRDVv2_e2_GoundaW0sLoZzPbFp5vbS8jLnI45vAlg');
  var ws=ss.getSheets()[0]
  ws.appendRow([
    new Date(),
    formObject.fullname,
    formObject.age,
    formObject.gender,
    formObject.admit,
    formObject.payment,
    formObject.symptom,
    "'"+formObject.phone,
    formObject.blood_group,
    

  ]);
  var token = 'PHkKM2kipRXjHMnciuK33elAgZ1LPWSkEd1oipgnQs8'
  var msg = 'New Customer register Your Name '+formObject.fullname +' '+formObject.age+'\n Tel Number '+formObject.phone
  NotifyApp.sendNotify(token,msg)
}

Name: Code.GS
