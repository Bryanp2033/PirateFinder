var Characters = require("../data/characters.js");

module.exports = function(app){
 
    app.get("/api/characters", function(req, res){
        res.json(Characters);
    });

    app.post("/api/characters", function(req, res){
        Characters.push(req.body);
        res.json(true);
    });

    app.post("/api/clear", function(req, res){
        Characters= [];
    });

}