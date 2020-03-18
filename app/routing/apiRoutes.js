// =============================================================
// Import the list of friend entries
// =============================================================
var friends = require('../data/friends.js');

// =============================================================
// Export the API routes so that they can be accessed in other files
// =============================================================
module.exports = function(app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
    
        friends.push(newFriend);

        // test what has been entered and passed to the post!
        console.log(newFriend);
    
        // respond with the same data that was passed to make sure the AJAX call gets the data correctly.
        res.json(newFriend);

    });

};
// =============================================================
// =============================================================