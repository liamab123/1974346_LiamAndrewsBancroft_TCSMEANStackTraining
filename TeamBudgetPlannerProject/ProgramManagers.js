var recordsList = [];
if(sessionStorage.getItem("records") != null){
    recordsList = JSON.parse(sessionStorage.getItem("records"));
}
function clearForm(){
    document.getElementsByTagName("form")[0].reset();
}
function add(){
    var newRecord = readNewRecord();
    recordsList.push(newRecord);
    sessionStorage.setItem("records",JSON.stringify(recordsList));
    console.log(sessionStorage.getItem("records"));
    clearForm();
}
function readNewRecord(){
    var recordObj   = {};
    recordObj.client = document.getElementById("client").value;
    recordObj.project = document.getElementById("project").value;
    recordObj.budget = document.getElementById("budget").value;
    console.log(recordObj);
    var recordString = JSON.stringify(recordObj);
    return recordString;
}
