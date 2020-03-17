// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// =============================================================
// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// =============================================================
// Expose the public directory to access the image 
// =============================================================
app.use(express.static(path.join(__dirname, './app/public')));

// =============================================================
// Require the routing modules
// =============================================================
require(path.join(__dirname, './app/routing/apiRoutes'))(app);  // tested successfully to return the friends json file
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);  // tested successfully to return the home html file.

// =============================================================
// Start the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });