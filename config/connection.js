//Reference MySQL for connection to our database
var mysql = require("mysql");

//Define data needed for connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Yankees02",
    database: "burgers_db"
});

//Establish connection to our database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;