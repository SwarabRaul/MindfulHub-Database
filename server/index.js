const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const PORT = 3000

const connectDB = require('./database')

// Middleware
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
const TestRoute = require("./routes/TestRoute")
app.use('/test',TestRoute)

app.get("/", (req, res) => {
    res.send("hello world");
  });
  
  app.listen(PORT || 8080,()=>{
    try{
      console.log(`Server is running on http://localhost:${PORT}`)
      connectDB()
    }catch(err){
      console.log("Unable to start server: " + err)
    }
  })