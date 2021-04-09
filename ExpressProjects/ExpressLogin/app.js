let app = require ("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true})); //enable body part data
let path  =  require("path");
let port = 9090;
app.get("/",(req,res)=>{
    console.log(__dirname+"/login.html");
   res.sendFile(__dirname+"/login.html");

}
)
app.post("/checkLogin",(req,res)=>{
    let user = req.body.user;
    let pass = req.body.pass;
    res.send("Post method called..." + user);
})
app.listen(port,()=>console.log(`server running on port ${port}`));