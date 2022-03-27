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


<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/6a972cf3a7.js" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Prompt', sans-serif;
    }
  </style>
</head>

<body>
  <div class="container">
<div class="row justify-content-md-center">
      <div class="col-6">
        <br>
                <div class="card  border-primary mb-6 " style="max-width:48rem;">
                  <div class="card-header text-white bg-info">
                  <i class="fas fa-address-card"></i> Form Record Data Sheet
                </div>

                <div class="card-body bg-warning ">
              <form id="myForm" onsubmit="handleFormSubmit(this)">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="Fullname">Your Fullame</label>
                      <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Fullname" required>
                    </div>

                      <div class="form-group col-md-6">
                        <label for="Age">Age</label>
                        <input type="text" class="form-control" id="age" name="age" placeholder="Age" required>
                      </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <p>Gender</p>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="gender" id="male" value="Man" required>
                          <label class="form-check-label" for="male">Male</label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="gender" id="female" value="Woman" required>
                          <label class="form-check-label" for="female">Woman</label>
                        </div>

                    </div>

                      <div class="form-group col-md-6">
                        <label for="Admit">Admit</label>
                        <input type="date" class="form-control" id="admit" name="admit" placeholder="Admit" required>
                      </div>

                      <div class="form-group col-md-6">
                        <label for="Payment">Payment</label>
                        <input type="payment" class="form-control" id="payment" name="payment" placeholder="Payment" required>
                      </div>

                      <div class="form-group col-md-6">
                        <label for="Phone">Phone</label>
                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone" required>
                      </div>
                  
                  </div>
                      
                      <div class ="form-group col=ms-6">
                        <lable for = "blood_group">Blood group</lable>
                        <select id = "blood_group" name="blood_group" class="form-control" required>
                          <option selected disabled value="">Blood group</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="AB">AB</option>
                          <option value="O">O</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label for="Symptom">Symptom</label>
                      <input type="symptom" class="form-control" id="symptom" name="symptom" placeholder="Symptom" required>
                      </div>

                    <button type="submit" class="btn bg-success btn-block">Save Record</button>
              </form>
            <div id="output"></div>
          </div>
        </div>
    </div>
<script>
      function preventFormSubmit(){
    var forms=document.querySelectorAll('form');
    for (var i=0;i<forms.length;i++){
      forms[i].addEventListener('submit',function(event){
        event.preventDefault();
      });
    }
  }
window.addEventListener('load',preventFormSubmit);

function handleFormSubmit(formObject){
  google.script.run.processForm(formObject);
  document.getElementById("myForm").reset();
  Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Already Record',
  showConfirmButton: false,
  timer: 1500
})

}
    </script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>

    Name: index.html

