const express = require("express");
const app = express();
const PORT = 5000;

const { loggerMiddleware, authMiddleware } = require('./exp-middleware');
const { login } = require('./authController');

app.use(express.json());
app.use(loggerMiddleware);
app.post('/login', login);

app.get("/dashboard",authMiddleware, (req, res) => {
  res.send("Hello dashboard from Express.js!");
});

// Home route
app.get("/", (req, res) => {
  res.send("Hello 🌍 from Express.js!");
});

// About route
app.get("/about", (req, res) => {
  // console.warn('req.url',req);
  res.send("This is the About page 🚀");
});

// JSON response
app.get("/user", (req, res) => {
  res.json({ id: 1, name: "Ankit", role: "Developer" });
});

// JSON Contact
app.get("/contact", (req, res) => {
  res.send("Contact Page 📞");
});

// JSON time
app.get("/time", (req, res) => {
  let currentDate = new Date()      
  res.json(`Current server date and time: ${currentDate.toString()}`
);
});

app.get('/alpha',(req,resp)=>{
    resp.status(201).json({success:true,message:'everyting is oky '})
    resp.send(`<h1>Hello Alpha</h1>`)
    //resp.json({ id: 1, name: "Ankit", role: "Developer" })
})


app.get('/custom/:id',(req,resp)=>{
    resp.send(`You requested user with ID: ${req.params.id}`)
})

app.get('/search',(req,resp)=>{
     resp.send(`What You are looking for : ${req.query.q}`)
    
})


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


