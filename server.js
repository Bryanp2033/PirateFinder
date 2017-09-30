var bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

app.listen(8080, function(){
    console.log("Currently listening on http://localhost:" + 8080);
});