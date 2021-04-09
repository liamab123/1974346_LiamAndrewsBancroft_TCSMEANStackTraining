let http = require ("http");
let url = require ("url");
let fs = require ("fs");
let port = 9999;
let tasks = [];
let taskForm = `
<html>
<head></head>
<body>
    <form action = "/store" method = "get">
    <label>Task ID</label>
    <input type = "text" name = "taskId"></br>
    <label>Employee ID </label>
    <input type = "text" name = "empId"></br>
    <label>Task</label>
    <input type = "text" name = "task"></br>
    <label>Due Date</label>
    <input type = "date" name = "dueDate"></br>
    <input type = "submit" value ="Add Task">
    </form>
    <form action = "/delete"> 
    <label>Task ID</label>
    <input type = "text" name = taskId> </br>
    <input type = "submit" value = "Delete Task">
    </form>
    <form action = "/display">
    <input type = "submit" value = "Show Tasks">
    </form>
    </body>
    </html>
`;
let server = http.createServer((req,res)=>{
    var pathInfo = url.parse(req.url,true).pathname;
    res.write(taskForm);
    if(pathInfo != "/favicon.ico"){
        if(pathInfo == "/store"){
            console.log("storing");
            var data = url.parse(req.url,true).query;
            console.log("task Id: " + data.taskId);
            tasks.push(data);
            console.log(JSON.stringify(tasks));
            fs.writeFileSync("tasks.json",JSON.stringify(tasks));
        }else if(pathInfo =="/delete"){
                var data = url.parse(req.url,true).query;
                let buf = fs.readFileSync("tasks.json");
                let stringBuf = buf.toString();
                let allTasks = JSON.parse(stringBuf);
                let found = false;
                for(var i = 0; i<allTasks.length;i++){
                    var cur = allTasks[i];
                    console.log(cur.taskId);
                    if (cur.taskId == data.taskId){
                        console.log(allTasks.length);
                        allTasks.splice(i,1);
                        console.log(allTasks.length);
                        found = true;
                    }
                }
                if(!found) console.log("Error");
                else{
                    fs.writeFileSync("tasks.json",JSON.stringify(allTasks));
                }
        }
        else if(pathInfo=="/display"){
               
                let buf = fs.readFileSync("tasks.json");
                let stringBuf = buf.toString();
                let allTasks = JSON.parse(stringBuf);
                var tasksTable = `
                <table>
                <tr>
                <th>Task ID</th>
                <th> Employee ID </th>
                <th> Task Name </th>
                <th> Due Date </th>
                </tr>
                `;
                for(var i = 0; i<allTasks.length;i++){
                    var cur = allTasks[i];
                    tasksTable += `<tr>
                            <td>${cur.taskId}</td>
                            <td>${cur.empId}</td>
                            <td>${cur.task}</td>
                            <td>${cur.dueDate}</td>
                    </tr>`;
                }
                tasksTable += `</table>`;
                res.write(tasksTable);
        }
        res.end();
    }
    
})
server.listen(port,()=>console.log(`Server is running on port number ${port}`));