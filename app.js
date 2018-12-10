var express = require('express');
var app = express();
var sql = require("mssql");

app.get('/', function (req, res) {
   

    // config for your database
    var config = {
        user: 'root',
        password: '',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});
app.get("/api/user", function(req , res){
    var query = "select * from [user]";
    executeQuery (res, query);
});
var server = app.listen(5000, function () {
    console.log('Server is running..');
});