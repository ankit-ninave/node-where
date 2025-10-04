const express = require('express')
const app = express();
const loggerMiddleware = require('../middleware/loggerMiddleware')
const authMiddleware = require('../middleware/authMiddleware')


app.use(loggerMiddleware)

app.get('/',(req,resp)=>{
resp.send("<h6>Called and Worked.....</h6>")
resp.end()
})

app.get('/dashboard',authMiddleware ,(req,resp)=>{
   resp.json({message:'dashboard viewing'});
   resp.end() 
})

app.get('/login',authMiddleware,(req,resp)=>{
   resp.json({message:'login sucessful'});
   resp.end() 
})

app.get('/logout',authMiddleware,(req,resp)=>{
   resp.json({message:'logout sucessful'});
   resp.end() 
})

app.listen(6600)
