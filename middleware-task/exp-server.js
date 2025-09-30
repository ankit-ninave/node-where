const express = require('express');
const app = express();
const  {loggerMiddleware,AuthUserMiddleware}  =  require('./exp-log-middleware');
const  {LoginAuth} = require('./exp-auth-controller');

app.use(express.json());

app.use(loggerMiddleware);

app.get('/',(req,resp)=>{
    resp.json({name:'ankit'})
})

app.get('/dashboard',AuthUserMiddleware,(req,resp)=>{
    //console.warn('req=====>',req);
        const user = req.user;
    console.warn('user=====>',user);
    resp.send(`<h5>You Are On Dashboard Page</h5>`)
})

app.post('/login',LoginAuth)

app.listen(6600);