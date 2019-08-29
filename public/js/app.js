$(document).ready(function () {

    var products;

    function getProducts(department) {
        var departmentPick = department || "";
        if (departmentPick) {
            departmentPick = "/department/" + departmentPick;
        }
        $.get("/api/products" + departmentPick, function (data) {
            products = data;
            console.log(products);
            showProducts(products);
        })
    }

    getProducts();

    function showProducts(products) {
        for (let i = 0; i < products.length; i++) {
            let newDiv = `<div class="card" style="width: 18rem; float:left">
        <div class="card-body">
          <h5 class="card-title" id = "product-name-${products[i].product_name}">${products[i].product_name}</h5>
          <p class="card-text" id = "product-price-${products[i].id}" data-price=${products[i].price}>$${products[i].price}</p>
          <p class="card-text" id = "product-quantity-${products[i].id}" data-quan=${products[i].stock_quantity}>${products[i].stock_quantity}</p>
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



    $(document).on("click", ".orderBtn", function () {
        //productId = this.id;
        var productVal = $(`#input-${this.id}`).val();
        //var productName = $(`#product-name-${this.id}`);
        //console.log(productName);
        var productPrice = $(`#product-price-${this.id}`).attr("data-price");
        var currentQuantity = $(`#product-quantity-${this.id}`).attr("data-quan");
        console.log(currentQuantity);
        let itemQuantity = parseInt((`${productVal}`));
        if(itemQuantity > currentQuantity){
            $("#modalData").text("We're sorry, we don't have enough of that product to fill your order.")
        }else{
        $("#modalData").text("Quantity: " + itemQuantity)
            .append("<br>Price: " + productPrice)
            .append("<br>Total: " + (productPrice * itemQuantity))
            .attr({
                'data-id': this.id,
                'data-quantity': itemQuantity,
                'data-totalQuantity': currentQuantity
            })
        }
        $("#orderModal").modal({keyboard:false,
            backdrop:"static"
        });
        $("#orderModal").modal("show");
    });

    $("#finalConfirm").on("click", function () {
        const data = {
            id: $('#modalData').attr("data-id"),
            stock_quantity: $('#modalData').attr('data-totalQuantity') - $('#modalData').attr("data-quantity")
        }
        updateData(data, processOrder())
    });

    function updateData(data, cb) {
        $.ajax({
            method: "PUT",
            url: "/api/products",
            data: data
        }).then(function (results) {
            console.log(results)
            if (cb) cb();
        })
    }

    function processOrder(quantity, price) {
        var cost = quantity * price;
        $("#modalData").text("Thank you for your order!");
        $("#modalData").append("");
    }

    $("#closeModal").on("click",function(){
        window.location.reload();
    })

    $("#showComputers").on("click", function () {
        $("#products").empty();
        getProducts("Computers");
    });
    $("#showAppliances").on("click", function () {
        $("#products").empty();
        getProducts("Appliances");
    });
    $("#showBooks").on("click", function () {
        $("#products").empty();
        getProducts("Books");
    })


});