var express = require("express");
var app = express();
var path = require("path");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Static folder/directory
app.use(express.static(path.join(__dirname, 'public')));

// Setting this to our home route of our Portfolio
app.get("/", function(req, res){
    res.sendFile("index.html")
}) 

app.listen(PORT, function(){
    console.log(`Our server is connected thru port: http://localhost:8080/`)
});