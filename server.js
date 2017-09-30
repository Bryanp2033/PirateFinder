var bodyParser = require('body-parser');
const path = require('path');
const express = require('express')
const app = express();

console.log("hi")


require("./app/routing/htmlRoutes.js")(app)

app.listen(8080, function(){
    console.log("Currently listening on http://localhost:" + 8080);
})