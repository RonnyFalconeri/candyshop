  
// requirements
var express = require("express");
var path = require("path");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var app = express();

// initialisations
app.set("port", process.env.PORT || 80);
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("index");
});
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());


var db = true;
if(db)
{
    // astablish connection variables of database
    var mysqlConnection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "candyshop",
        password: "candyshop",
        database: "candyshopDB"
    });

    // connect to database
    mysqlConnection.connect((err) => {
        if(!err){
            console.log("     --- Connection to Database successfull! Yeey!");
        }else {
            console.log("     --- Connection to Database failed! AMK! Error:"+ JSON.stringify(err, undefined, 2));
        }
    });
}


// start webserver -------------------------------
app.listen(app.get("port"), function(){   
    console.log("                                                                                   ");
    console.log("                                                                                   ");
    console.log("                                                                                   ");
    console.log("                                                                                   ");                                                                                          
    console.log("     _____                       _            _____   _                            ");
    console.log("    / ____|                     | |          / ____| | |                           ");
    console.log("   | |        __ _   _ __     __| |  _   _  | (___   | |__     ___    _ __         ");
    console.log("   | |       / _` | | '_ \\   / _` | | | | |  \\___ \\  | '_ \\   / _ \\  | '_ \\        ");
    console.log("   | |____  | (_| | | | | | | (_| | | |_| |  ____) | | | | | | (_) | | |_) |       ");
    console.log("    \\_____|  \\__,_| |_| |_|  \\__,_|  \\__, | |_____/  |_| |_|  \\___/  | .__/        ");
    console.log("                                      __/ |                          | |           ");
    console.log("                                     |___/                           |_|           ");
    console.log("                                                                                   ");
    console.log("     --- Server started on port "+ app.get("port")+"! HAVE FUN BRO!!");
});




// --------------------------------- Requests -------------------------------

app.get("/product/name/:name", (req, res) =>{
    mysqlConnection.query("SELECT * FROM products WHERE name LIKE CONCAT(?,'%')", [req.params.name], (err, rows, fields) =>{
        if (err) throw err;
        res.send(rows);
    });
});

app.get("/product", (req, res) =>{
    mysqlConnection.query("SELECT * FROM products", (err, rows, fields) =>{
        if (err) throw err;
        res.send(rows);
    });
});

// return kunde with given id -> get request
app.get("/articles", (req, res) =>{
    mysqlConnection.query("SELECT * FROM products", (err, rows, fields) =>{
        if (err) throw err;
        res.send(rows);
    });
});