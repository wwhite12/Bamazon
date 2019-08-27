module.exports = function(sequelize, DataTypes){
    const Product = sequelize.define("Product",{
        product_name:{
            type: DataTypes.STRING
        },
        department_name:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        stock_quantity:{
            type: DataTypes.INTEGER
        }
    });
    Product.sync().then(function(){
        Product.bulkCreate([{
            product_name: "Macbook Pro",
            department_name: "Computers",
            price: 1300,
            stock_quantity: 20
        },
    {
        product_name: "Microsoft Surface",
        department_name: "Computers",
        price: 800,
        stock_quantity: 30
    },
    {
        product_name: "Google Pixelbook",
        department_name: "Computers",
        price: 1000,
        stock_quantity: 15
    },
    {
        product_name: "Mini-fridge",
        department_name: "Appliances",
        price: 200,
        stock_quantity: 50
    },
    {
        product_name: "Countertop Microwave",
        department_name: "Appliances",
        price: 70,
        stock_quantity: 55
    },
    {
        product_name: "Dishwasher",
        department_name: "Appliances",
        price: 400,
        stock_quantity: 25
    },
    {
        product_name: "The Count of Monte Cristo",
        department_name: "Books",
        price: 10,
        stock_quantity: 80
    },
    {
        product_name: "Of Mice and Men",
        department_name: "Books",
        price: 15,
        stock_quantity: 60
    },
    {
        product_name: "The Agony and the Ecstasy",
        department_name: "Books",
        price: 17,
        stock_quantity: 40
    },
    {
        product_name: "To Kill a Mockingbird",
        department_name: "Books",
        price: 10,
        stock_quantity: 50
    }
    ])
    })
    return Product;
}