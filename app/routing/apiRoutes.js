var tableData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/survey", function (req, res) {
        res.json(tableData);
    });
}