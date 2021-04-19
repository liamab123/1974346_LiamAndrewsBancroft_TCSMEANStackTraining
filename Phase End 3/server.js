let app = require("express")();
let http = require("http").Server(app);  
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=> {
    socket.on("send name and message",(na,me)=>{
        console.log("name: " + na);
        console.log("message: " + me);
        let n = na;
        let m = me;
        mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
            if(!err1){
                let db = client.db("meanstack");
                db.collection("Message").insertOne({Name:n,Message:m},(err2,result)=>{
                        if(!err2){
                            console.log(result.insertedCount);
                        }else {
                            console.log(err2.message);
                        }
                        client.close();    
                    });
                    
                }
            });

    })
})
http.listen(9999,()=>console.log('server running on port number 9999'));