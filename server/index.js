const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const PORT = 3000

// Middleware
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("hello world");
  });
  
  app.listen(PORT || 8080,()=>{
    try{
      console.log(`Server is running on  http://localhost:${PORT}`)
    }catch(err){
      console.log("Unable to start server: " + err)
    }
  })