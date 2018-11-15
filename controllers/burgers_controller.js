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

router.put('/burgers/update', function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

//Export our routes to the server
module.exports = router