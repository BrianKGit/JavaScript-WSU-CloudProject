// This runs a secure https server on port 51216
// or a unsecure      http server on port 51215
// command to generate self signed certs for site, run in folder ssl
// sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
// reference https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

// better for chrome uses config file (still has issues with chrome but loadable)
// openssl req -x509 -nodes -days 40 -newkey rsa:2048 -keyout selfsigned.key -out selfsigned.crt -config req.cnf -sha256


require("dotenv").config();                         //require and config thats all you need for this to be active and running
const express = require("express");
const bodyParser = require("body-parser");

// used for ssl
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');


const app = express();
app.use(express.static("public"));                   //this static thing lets you send the css and js with html
app.use(bodyParser.urlencoded({extended: true}));    //extended: true allows to post 
//also bodyParser.json or bodyParser.text


// alternative way to write
//                      //path.join(currentDirectory, folderName, fileName)
// cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt'))

const key = fs.readFileSync(__dirname + process.env.PRIVATE);
const cert = fs.readFileSync(__dirname + process.env.CERTIFICATE);
const myOptions = {key: key, cert: cert};               //for ssl
const httpsServer = https.createServer(myOptions, app);  //https server

httpsServer.listen(process.env.SECUREPORT, function() {
    console.log('secure server is running on port ' + process.env.SECUREPORT);
});

app.listen(process.env.PORT, function() {
    console.log('regular server is running on port ' + process.env.PORT);
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