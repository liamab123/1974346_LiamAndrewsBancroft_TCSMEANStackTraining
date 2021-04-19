let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/add",(req,res)=>{
    res.send(`<form action = "/storeCDetails" method = "post">
    <label>Course ID (unique)</label>
    <input type = "text" name = "_id"><br/>
    <label>Course Name</label>
    <input type = "text" name = "cName"><br/>
    <label>Description</label>
    <input type = "text" name = "description"><br/>
    <label>Amount</label> 
    <input type = "text" name = "amount"><br/>
    <input type = "submit" value = "Add Course">
    </form>`)
}
)
app.get("/delete",(req,res)=>{
    res.send(`<form action = "/deleteCDetails" method = "post">
    <label>ID to Delete</label>
    <input type = "text" name = "_id"><br/>
    <input type = "submit" value = "Delete Course">
</form>`)
})
app.get("/update",(req,res)=>{
    res.send(`<form action = /updateCDetails method = "post">
        <label>ID to Update</label>
        <input type = "text" name = "_id"><br/>
        <label>New Amount</label>
        <input type = "text" name = "newamt"><br/>
        <input type = "submit" value = "Update Course">
    </form>  `)
})

app.post("/storeCDetails",(req,res)=> {
  
       let id = req.body._id;
       let curName = req.body.cName;
       let desc = req.body.description;
       let curAmt = req.body.amount;
       mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
           if(!err1){
               let db = client.db("meanstack");
               db.collection("Courses").insertOne({_id:id,name:curName,description:desc,amount:curAmt},(err2,result)=>{
                   if (!err2){
                       console.log("Added " + result.insertedCount)
                   }
                   else console.log(err2.message);
                   client.close();    
               })
           }

       })
       res.sendFile(__dirname+"/index.html");
})
app.post("/deleteCDetails",(req,res)=> {
    let id = req.body._id;
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
            if(!err1){
                let db = client.db("meanstack");
                db.collection("Courses").deleteOne({_id:id},(err2,result)=> {
                    if(!err2){
                           if(result.deletedCount>0){
                                console.log("Record deleted successfully")
                           }else {
                                console.log("Record not present")
                           }
        
                    }
                    client.close();
                })           
            }
        })
   
    res.sendFile(__dirname+"/index.html")
})
app.post("/updateCDetails",(req,res)=>{
    let id = req.body._id;
    let newAmt = req.body.newamt;
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
        if(!err1){
            let db = client.db("meanstack");
            db.collection("Courses").updateOne({_id:id},{$set:{amount:newAmt}},(err2,result)=> {
                if(!err2){
                       if(result.modifiedCount>0){
                            console.log("Updated successfully")
                       }else {
                            console.log("Record not found");
                       }
                }
                else console.log(err2.message);
                client.close();
            })           
        }
    })
    res.sendFile(__dirname+"/index.html");
}
)
async function getCourses(){
    let db = await mongoClient.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    let _db = await db.db("meanstack");
    let courses = _db.collection("Courses");
    let data = await courses.find({}).toArray();
    console.log("get courses returns: " + data);
    return data;
}
app.get("/fetch",async(req,res)=> {
         
        const result = await getCourses();
        console.log("result: " + result);
        res.json(result);
        
})
app.listen(9090,()=>console.log("running on port 9090"));