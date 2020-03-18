// =============================================================
// Dependencies
// =============================================================
var express = require("express");
// var path = require("path");

// =============================================================
// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
// Expose the public directory to access the image 
// =============================================================
// app.use(express.static(path.join(__dirname, './app/public')));

// =============================================================
// Require the routing modules
// =============================================================
require('./app/routing/apiRoutes')(app);  // tested successfully to return the friends json file
require('./app/routing/htmlRoutes')(app);  // tested successfully to return the home html file.

// =============================================================
// Start the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });