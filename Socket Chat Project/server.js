let app = require("express")();
let http = require("http").Server(app);  
let io = require("socket.io")(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=> {
    socket.on("send message",(msg)=> {
        console.log(msg);
    })
})
http.listen(9090,()=>console.log('server running on port number 9090'));