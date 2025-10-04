


const loggerMiddleware = (req,resp,next)=>{
    console.warn('From Request logging and the url name is',req.url);
    next();
}

module.exports = loggerMiddleware