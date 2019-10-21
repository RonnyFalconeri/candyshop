  
// requirements
var express = require("express");
var path = require("path");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var app = express();

// initialisations
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());


var db = false;

if(db)
{
    // astablish connection variables of database
    var mysqlConnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin",
        database: "candyshop"
    });

    // connect to database
    mysqlConnection.connect((err) => {
        if(!err)
            console.log("Database: connection successful!");
        else
            console.log("Database: connection failed. Error: "+ JSON.stringify(err, undefined, 2));
    });
}else {
    console.log("Database is disabled.");
}


// start webserver -------------------------------
app.listen(app.get("port"), function(){
    console.log("CandyShop | Server started on port "+ app.get("port"));
});




// --------------------------------- Requests -------------------------------

// Beispiel einer request
// return kunde with given id
app.get("/kunde/id/:id", (req, res) =>{
    mysqlConnection.query("SELECT * FROM kunde WHERE id=?", [req.params.id], (err, rows, fields) =>{
        if (err) throw err;
        res.send(rows);
    });
});