//Import the orm
var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    }
}

//Export these db handling functions to the controller
module.exports = burger;