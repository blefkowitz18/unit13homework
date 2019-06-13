var tableData = require("../data/friends");
//app.get not required because tabledata is being required above.
//app.post is listening for a post request
module.exports = function (app) {
    app.post("/api/survey", function (req, res) {
        //logic from request
        
        res.json(tableData);
    });
}