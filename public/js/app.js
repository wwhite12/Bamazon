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
        let newDiv = `<div class="card" style="width: 18rem; float:left">
        <div class="card-body">
          <h5 class="card-title">${products[i].product_name}</h5>
          <p class="card-text">$${products[i].price}</p>
          <form>
          <div class="form-group">
          <label for="exampleFormControlTextarea1">Enter quantity to purchase</label>
          <textarea class="form-control" id="quantityInput" rows="1"></textarea>
        </div>
        </form>
        </div>
      </div>`
      $("#products").append(newDiv);
    //     let newDiv = $("<div>");
    //     newDiv.addClass("card");
    //     newDiv.text(products[i].product_name);
    //     newDiv.append(" $"+products[i].price);
    //    $('#products').append(newDiv);

    }

}

$("#submitOrder").on("click",function(){
    $("#orderModal").modal("show");
})

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