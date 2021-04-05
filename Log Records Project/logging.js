let fs = require("fs");
const { read } = require("fs/promises");
let r1 = require("readline-sync");
const { Record } = require("./record");
let numRecords = r1.question("How many records to log?");      
function readAndLog(){                
for(var i = 0; i<numRecords; i++){
    let firstName = r1.question("First Name: ");
    let lastName = r1.question("Last Name: ");
    let gender = r1.question("Gender: ");
    let email = r1.question("Email: ");
    let dateAndTimeOfCreation = Date();
    debugger;
    var recordObj = new Record(firstName,lastName,gender,email,dateAndTimeOfCreation);
    debugger;
   let recString =  JSON.stringify(recordObj);
   fs.readFile("records.json",(err,data)=> {
    if(!err){
        debugger;
        let storedRecs  = JSON.parse(data);
        storedRecs.push(recString);
        fs.writeFile("records.json",JSON.stringify(storedRecs),(err)=> {
            if(!err){
                debugger;
                console.log("Records stored successfully!")
            }
        })

    }
})
   
}

}
exports.readAndLog = readAndLog;
