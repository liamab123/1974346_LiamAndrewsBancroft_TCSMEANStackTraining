let fs = require ("fs");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
let buf = fs.readFileSync("call_data.json");
let stringBuf = buf.toString();
let calls = JSON.parse(stringBuf);
mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
    if(!err1){
        for(var i = 0; i<calls.length;i++){
            curID = calls[i]._id;
            curSource = calls[i].source;
            curDest = calls[i].destination;
            curSourceLoc = calls[i].sourceLocation;
            curDestLoc = calls[i].destinationLocation;
            curDur = calls[i].callDuration;
            curRoam = calls[i].roaming;
            curCharge = calls[i].callCharge;
            let db = client.db("meanstack");
        db.collection("CallRecords").insertOne({_id:curID,source:curSource,destination:curDest,sourceLocation:curSourceLoc,destinationLocation:curDestLoc,callDuration:curDur,roaming:curRoam,callCharge:curCharge},(err2,result)=>{
                if(!err2){
                    console.log("success " + result.insertedCount);
                }else {
                    console.log(err2.message);
                }
                client.close();    
            });
        }
        }
    });