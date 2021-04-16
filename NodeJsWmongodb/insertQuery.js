let mongoClient = require("mongodb").MongoClient;
let app = require("express")();
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{useUnifiedTopology: true },(err1,client)=>{
    let db = client.db("meanstack");
    if(!err1){
        console.log("connected succesfully");
        db.collection("Product").insertOne({_id:101,pname:"TV",price:55000},(err2,result)=>{
            if(!err2){
                console.log(result);
            }
            else{
                console.log(err2);
            }
            client.close();
        });
    }
    else{
        console.log("Error" + err1);
    }

})