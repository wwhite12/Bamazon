const express = require("express");
const PORT = 8080;

const app = express();

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);

db.Product.sync({force:true}).then(function(){
app.listen(PORT,function(){
    console.log("Now listening on PORT: "+PORT);
})
});