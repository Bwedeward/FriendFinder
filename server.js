var express = require("express")
var path = require("path")

var app = express();

var PORT = proces.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT)
})