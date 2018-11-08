//Setting up our dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//The default port if none is chosen by heroku will be 8080
var PORT = process.env.PORT || 8080;

//Start up the express application
var app = express();

//Serve the static content
app.use(express.static("public"));

//Set up app body data parsing as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
