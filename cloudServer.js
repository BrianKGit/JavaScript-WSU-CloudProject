
require("dotenv").config();         //require and config thats all you need for this to be active and running
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));                   //this static thing lets you send the css and js with html
app.use(bodyParser.urlencoded({extended: true}));    //extended: true allows to post 
//also bodyParser.json or bodyParser.text

app.listen(process.env.PORT, function() {
    console.log('my server is running on port ' + process.env.PORT);

    //example for .env variable use (how to)    don't forget to use .gitignore for .env
    console.log('Env variable: ' + process.env.SECRET_WORD);    //SECRET_WORD is hidden here but value is in .env folder
});




// GETS =====================================================================================
// anchor example:      href="about"      get receives /about and works
app.get("/", function(req, res) {
    let fromIP = req.connection.remoteAddress;
    let now = new Date();

    console.log(fromIP + ' used get / \t' + now.toLocaleString());
    res.sendFile(__dirname + "/public/html/home.html");   //__dirname is the file path of current path
    // response.sendFile(__dirname + "/index.css");

});
app.get("/about", function(req, res) {
    let fromIP = req.connection.remoteAddress;
    let now = new Date();

    console.log(fromIP + ' used get /html/about\t' + now.toLocaleString());
    // res.send('<h1>This is a first attempt with node server</h1>');
    res.sendFile(__dirname + "/public/html/about.html");
});

app.get("/history", function(req, res) {
    let fromIP = req.connection.remoteAddress;
    let now = new Date();

    console.log(fromIP + ' used get /html/history\t' + now.toLocaleString());
    // res.send('<h1>This is a first attempt with node server</h1>');
    res.sendFile(__dirname + "/public/html/history.html");
});

app.get("/types-service", function(req, res) {
    let fromIP = req.connection.remoteAddress;
    let now = new Date();

    console.log(fromIP + ' used get /html/types-service\t' + now.toLocaleString());
    // res.send('<h1>This is a first attempt with node server</h1>');
    res.sendFile(__dirname + "/public/html/types-service.html");
});

app.get("/deployment", function(req, res) {
    let fromIP = req.connection.remoteAddress;
    let now = new Date();

    console.log(fromIP + ' used get /html/deployment\t' + now.toLocaleString());
    // res.send('<h1>This is a first attempt with node server</h1>');
    res.sendFile(__dirname + "/public/html/deployment.html");
});

app.get("/pros-cons", function(req, res) {
    let fromIP = req.connection.remoteAddress;
    let now = new Date();

    console.log(fromIP + ' used get /html/pros-cons\t' + now.toLocaleString());
    // res.send('<h1>This is a first attempt with node server</h1>');
    res.sendFile(__dirname + "/public/html/pros-cons.html");
});

// ==========================================================================================


// POSTS=====================================================================================

app.post("/", function(req, res) {
    let fromIP = req.connection.remoteAddress;
    let now = new Date();

    console.log(fromIP + ' used post /public/html/home.html\t' + now.toLocaleString());
    console.log(req.body);
    console.log('------------------------------------------------------\n');
    // console.log(req);    //ton of info
    

    let name = String(req.body.formName);
    let email = String(req.body.formEmail);
    let phone = String(req.body.formPhone);

    res.sendFile(__dirname + "/public/html/success.html");
    // res.send("<h1>Success!</h1><br><h1>Name: " + name + "</h1><br><h1>Email: " + email + "</h1><br><h1>Phone: " + phone + "</h1>");
});

// ==========================================================================================

//404 not found page
app.use(function(req, res, next){
    res.status(404);
    res.sendFile(__dirname + "/public/html/not-found.html");
    // res.send('Ooopsy Poopsy')
});
