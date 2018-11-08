//Express Dependencies for Routing
var express = require("express");

var router = express.Router();

//Routes

//Root route that returns index page as response
router.get("/", function (req, res) {
    res.render("index");
});

//Export our routes to the server
module.exports = router