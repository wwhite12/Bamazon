$(document).ready(function(){

var productContainer = $(".product-container");
var products;

function getProducts(department){
    var departmentPick = department || "";
    if(departmentPick){
        departmentPick = "/department/" + departmentPick;
    }
    $.get("/api/products" + departmentPick,function(data){
        products = data;
        console.log(products);
        showProducts(products);
    })
}

getProducts();

function showProducts(products){
    for(let i = 0;i<products.length;i++){
        let newDiv = $("<div>");
        newDiv.addClass("card");
        newDiv.text(products[i].product_name);
        newDiv.append(" $"+products[i].price);
       $('#products').append(newDiv);

    }

}

$("#showComputers").on("click",function(){
    $("#products").empty();
    getProducts("Computers");
});
$("#showAppliances").on("click",function(){
    $("#products").empty();
    getProducts("Appliances");
});
$("#showBooks").on("click",function(){
    $("#products").empty();
    getProducts("Books");
})



})