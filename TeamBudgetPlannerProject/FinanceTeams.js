var total = 0;
function addRecordsToTable(){
    var recordsString = sessionStorage.getItem("records");
    var records = JSON.parse(recordsString);
    for(var i = 0; i<records.length;i++){
    var recordString = records[i];
    var record = JSON.parse(recordString);
    var table = document.getElementById("budgettable");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = record.client;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = record.project;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = record.budget;
    var budgetNum = parseInt(record.budget);
    total += budgetNum;
    console.log("total: " + total);
    }
    var tot = document.getElementById("total");
    tot.innerHTML = total;
}
