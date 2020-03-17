// =============================================================
//  starting point from Activity 14 
// =============================================================

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
        // req.body is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
    
        // Using a RegEx Pattern to remove spaces from newFriend
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newFriend);
    
        friendsArray.push(newFriend);
    
        res.json(newFriend);
    });

};
// =============================================================
// =============================================================
