var cartItems = [];
if (sessionStorage.getItem("cart") != null) {
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
}
var total = 0;
if (sessionStorage.getItem("total") != null) {
    total = JSON.parse(sessionStorage.getItem("total"));
}
function showCart() {
    for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
        var i = cartItems_1[_i];
        var curItem = JSON.parse(i);
        var curName = curItem.name;
        var curPrice = curItem.price;
        var holder = document.getElementById("cartTable");
        var itemDiv = document.createElement("div");
        var nameDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        itemDiv.classList.add("row");
        nameDiv.classList.add("col");
        priceDiv.classList.add("col");
        nameDiv.innerHTML = curName;
        priceDiv.innerHTML = curPrice.toString();
        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(priceDiv);
        holder.appendChild(itemDiv);
        showTotal();
    }
}
function showTotal() {
    document.getElementById("total").innerHTML = total.toString();
}
