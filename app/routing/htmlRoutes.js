// =============================================================
// Dependencies
// =============================================================
var path = require("path");

// =============================================================
// Export the API routes so that they can be accessed in other files
// =============================================================
module.exports = function(app) {

    // A GET Route to /survey which should display the survey page.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // Any other route will drop to this default, catch-all route, that leads to home.html which displays the home page.
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};
