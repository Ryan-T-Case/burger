//Express Dependencies for Routing
var express = require("express");

var router = express.Router();

var burger = require('../models/burger.js');

//Routes

//Root route that returns index page as response
router.get("/", function (req, res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    });
});

//Export our routes to the server
module.exports = router