var numInCart = 0;
if (sessionStorage.getItem("cartNum") != null) {
    numInCart = JSON.parse(sessionStorage.getItem("cartNum"));
}
var cart = [];
if (sessionStorage.getItem("cart") != null) {
    cart = JSON.parse(sessionStorage.getItem("cart"));
}
var totalPrice = 0;
if (sessionStorage.getItem("total") != null) {
    totalPrice = JSON.parse(sessionStorage.getItem("total"));
}
var item = /** @class */ (function () {
    function item(name, price) {
        this.name = name;
        this.price = price;
    }
    return item;
}());
function updateCart() {
    sessionStorage.setItem("cartNum", numInCart.toString());
    document.getElementById("numItems").innerHTML = numInCart.toString();
}
function addToCart(name, price) {
    numInCart++;
    updateCart();
    var theItem = new item(name, price);
    cart.push(JSON.stringify(theItem));
    sessionStorage.setItem("cart", JSON.stringify(cart));
    totalPrice += price;
    console.log(totalPrice);
    sessionStorage.setItem("total", JSON.stringify(totalPrice));
}
