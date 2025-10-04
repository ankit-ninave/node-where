const express = require('express')
const app = express();

app.get('/',(req,resp)=>{
console.warn('called')
})

app.listen(6600)