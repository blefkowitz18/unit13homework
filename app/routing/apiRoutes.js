var tableData = require("../data/data/friends");
//app.get not required because tabledata is being required above.
//app.post is listening for a post request
module.exports = function (app) {
    app.post("/api/survey", function (req, res) {
        //logic from request
        var bestFriend ;
        var matchScore = 1000;
        for (var i=0; i<tableData.length; i++){
            var friend = tableData[i];
            var inputScores = req.scores;
            var score = 0;
            for(var j=0; j<friend.scores.length; j++){
                score += abs(parseInt(friend.scores[j])-parseInt(inputScores[j]));
            }
            if (matchScore > score){
                bestFriend = friend
                matchScore = score
                //new match score gets set equal to the score to beat. We want to be closeest to 0.
            }
        }
        res.json(bestFriend);
    });
}