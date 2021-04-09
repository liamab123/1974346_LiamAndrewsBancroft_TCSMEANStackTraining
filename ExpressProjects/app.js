let express = require ("express");
let app = express();
let port = 9090; 
let bodyParser = require ("body-parser");
app.user(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Welcome to Express module");
}
)
app.get("/aboutus",(req,res)=>{
    res.send("Welcome to About Us Page")
})
app.get("/contactus",(req,res)=>{
    res.send("Welcome to contact Us Page")
})

//passing single value
//http://localhost:9090/singleQuery?name=Ajay
app.get("/singleQuery",(req,res)=>{
    let name = req.query.name;
    res.send("welcome user " + name);
})
//passing multple values using query param 
//http://localhost:9090/multiple?id=100&name=Ramesh&salary=25000
app.get("/multiple",(req,res)=>{
let id = req.query.id;
let name = req.query.name;
let salary = req.query.salary;
salary = eval(salary) + 5000;
res.send(`Your id is ${id}, name is ${name}, Gross Salary ${salary}`);
}
)

//passing single value using path param 
//http://localhost:9090/singlePath/mahesh
app.get("/singlePath/:name",(req,res)=>{
    let userName = req.params.name;
    res.send("Welcome user using path param " + userName);
})
app.post("/",(req,res) =>{
    res.send("Welcome to Post Method!");
})
app.post("/storeData",(req,res)=>{
    let name = req.body.name;
    res.send("welcome to post method. name = " + name);
}
)
app.listen(port,()=>console.log('Server running on port number ${port}'));