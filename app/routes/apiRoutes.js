// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",  
      friendDifference: 1000
    };

      console.log(req.body);

      var userData = req.body;
      var userScores = userData.scores;
      console.log("USER SCORES " + userScores);
      var totalDifference = 0;

      for (var i = 0; i < friends.length; i++){
        console.log(friends[i]);
        var currentFriend = friends[i];
        totalDifference = 0;

        for (var j; j < currentFriend.scores.length; j++){
            totalDifference = totalDifference + Math.abs(parseInt(userScores[i]) - parseInt(friends[i].scores[j]));
          }
            if (totalDifference <= bestMatch.friendDifference) {
              bestMatch.name = friends[i].name;
              bestMatch.photo = friends[i].photo;
              bestMatch.friendDifference = totalDifference;
            }        
      }
      friends.push(userData);
      console.log(userData);
      res.json(bestMatch);
  });
};

 
  