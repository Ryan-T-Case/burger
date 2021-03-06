// Import MySQL connection.
var connection = require("../config/connection.js");

//This orm object holds all SQL statements
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function (table, condition, cb) {
    connection.query('UPDATE' + table + 'SET devoured=true WHERE id=' + condition + ';', function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

//Export the orm object for the model
module.exports = orm;