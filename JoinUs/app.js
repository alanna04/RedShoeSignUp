var express = require ('express');
var mysql = require('mysql');
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'alanna04',
  database : 'join_us'
});

app.get ("/", function(req, res){
    //find count of users in database
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results){
        if (err) throw err;
        var count = results[0].count;
       // res.send("We have " + count + " users in our db");
       res.render("home", {data:count});
    })
});

app.post("/register", function(req, res){
    var person = {
        email: req.body.email};
        connection.query('INSERT INTO users SET ?', person, function(err, result) {
        console.log(err);
        console.log(result);
        res.redirect("/");
   // console.log("post request /register email is" + req.body.email);
    });
});

app.get ("/joke", function(req, res){
    var joke = "what is it? I don't know.";
    res.send(joke);
    
});

app.get ("/random_num", function(req, res){
   var num = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky number is " + num);
});

app.listen(8080, function(){
    console.log("Server running on 8080!");
    });