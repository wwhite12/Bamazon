const db = require("../models");

module.exports = function(app){

    app.get("/api/products",function(req,res){
        db.Product.findAll().then(function(results){
            res.json(results);
        })
    });

    app.get("/api/products/department/:department",function(req,res){
        db.Product.findAll({
            where:{
                department_name: req.params.department
            }
        }).then(function(results){
            res.json(results);
        })
    });

    app.put("/api/products",function(req,res){
        console.log(req.body)
        db.Product.update(req.body,{
            where:{
                id: req.body.id
            }
        }).then(function(results){
            res.json(results);
        })
    })
}