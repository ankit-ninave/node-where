// const { error } = require("console");
// let l_gethomedata = require("./home.js");

//Task 1:
//let l_os = require('./os_module')
//let l_path = require('./path_module')
//let l_fs = require('./fs_module')
//let l_url = require('./url_module')

//Task 2:
// let l_systemUserLogGenerator = require('./tasks/system-user-logs.js');
// l_systemUserLogGenerator();

//Task 3:
// let l_systemLogGenerator = require('./tasks/systemLogGenerator.js');
// l_systemLogGenerator();

console.warn('hello')

//let http = require('http');
// const server = http.createServer((req,resp)=>{
// resp.writeHead(200,{"content-type":'application/json'})
//   resp.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// })

// server.listen(8000)


// let server_step = http.createServer((request,response)=>{

//     if(request.url == '/'){
//             response.writeHead(200,{"content-type":'application/json'})

//     response.end(JSON.stringify({ message: "This is Home Page" }));
//     }
    
//     if(request.url == '/about'){
//             response.writeHead(200,{"content-type":'application/json'})

//     response.end(JSON.stringify({ message: "This is about Page" }));
//     }
// })


// server_step.listen(8200);

let http = require('http');

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<html>
               <head><link rel="stylesheet" href="/style.css"></head>
               <body><h1>Hello from HTML Page</h1></body>
             </html>`);
  } 
  else if (req.url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(`body { background: lightblue; text-align:center; font-family:sans-serif; } 
             h1 { color: darkblue; }`);
  }
});

server.listen(8200, () => {
  console.log("Server running at http://localhost:8200");
});
