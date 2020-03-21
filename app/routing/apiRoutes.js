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
        res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;

        // Add the functionality to process the data and determine the best friend match!
        // Must determine before adding as a friend or else they will match themselves
        var friendIndex = findBestFriend(newFriend);
    
        friends.push(newFriend);
    
        // respond with the data for the friend with the best match
        res.json(friends[friendIndex]);

 
    });

};
// =============================================================
// =============================================================

function findBestFriend(friend) {

    //grabs the new friend's scores values 
    var newFriendScores = friend.scores;

    // array to hold the differences in the scores
    var scoresArray = [];

    // variable to hold the index of the friends that has the lowest total differential
    var bestMatch = 0;

    //loop through all current friends
    for (i = 0; i < friends.length; i++) {
        // variable to calculate the difference in each score as a total
        var scoresDiff = 0;

        //loop through all the scores of all the friends
        for (j = 0; j < newFriendScores.length; j++) {
            // difference is calculated as an Absolute of the difference between the new friend and the friend in the list
            scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
        }

        //push results into scoresArray
        scoresArray.push(scoresDiff);

    }

    // loop through the array holding the differences to find the index with the lowest value
    // bestmatch starts at position 0 so the loop only needs to start at position 1
    for (i = 1; i < scoresArray.length; i++) {

        // if the difference at the looping index is lower the difference at the prior best match 
        if (scoresArray[i] < scoresArray[bestMatch]) {
        
            // the current index is now the new bestmatch
            bestMatch = i;
        
        }

    }

    //return bestMatch data
    return bestMatch;        

};