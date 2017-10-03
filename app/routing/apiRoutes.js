var Characters = require("../data/characters.js");

module.exports = function(app){
 
    app.get("/api/characters", function(req, res){
        res.json(Characters);
    });


    app.post('/api/new', function(req, res){
        var userData = req.body;
        Characters.push(userData);
        console.log(userData)


        //  I will peusdo code this part out as I'm having trouble coding it out

        // I would want to loop out data of the Characters data

        // inside in the loop I wanna loop userData.scores
        // afterwards I wanna add the sum of userData.scores to the other sums of the data from Characters
        // with this information I match the sums of UserData.scores to that of the sum of the other Characters
        // it will find a match and then push that information into an empty array
    })
}