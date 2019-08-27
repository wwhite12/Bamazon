const express = require("express");
const PORT = 8080;

const app = express();

const db = require("./models");


db.sequelize.sync().then(function(){
app.listen(PORT,function(){
    console.log("Now listening on PORT: "+PORT);
})
});