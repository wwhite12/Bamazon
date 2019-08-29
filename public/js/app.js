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
          <textarea class="form-control quantityInput" id = "input-${products[i].id}"value="input-id-${products[i].id}" rows="1"></textarea>
        </div>
        </form>
        <a href="#" class="btn btn-primary orderBtn" id = "${products[i].id}">Order</a>
        </div>
      </div>`
      $("#products").append(newDiv);

    }

}



$(document).on("click",".orderBtn",function(){
    //productId = this.id;
    var productVal = $(`#input-${this.id}`).val();
    console.log(productVal);
    let itemQuantity = parseInt((`${productVal}`));
    $("#modalData").text(itemQuantity);
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