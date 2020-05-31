var friends = require("../data/friends.js");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
      var newFriend = req.body
      var difference = 0
      var friendMatch = null
      newFriend.scores.forEach((element, i) => {
        newFriend.scores[i] = parseInt(element)
      })
      console.log(newFriend.scores)
      friends.forEach(element => {
        element.scores.forEach((score, i) => {
          difference += Math.abs(parseInt(newFriend.scores[i]) - score)
          if (i === (element.scores.length-1)) {
            if (!friendMatch) {
              friendMatch = element 
              friendMatch.difference = difference
            } else if (friendMatch.difference > difference) {
              friendMatch = element
              friendMatch.difference = difference
            } 
            difference = 0
          }
        })
      });
      console.log("YOUR NEW FRIEND!!", JSON.stringify(friendMatch))
      friends.push(newFriend)
      console.log(friends)
      res.json(friendMatch)
    });
  };
  