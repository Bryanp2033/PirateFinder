var bodyParser = require('body-parser');
const express = require('express');
const app = express();

PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

app.listen(PORT,function(){
    console.log("Currently listening on http://localhost:" + PORT);
});