const express = require("express");
const PORT = 8080;

const app = express();

app.listen(PORT,function(){
    console.log("Now listening on PORT: "+PORT);
})