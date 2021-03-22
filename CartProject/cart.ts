let numInCart:number = 0;
if(sessionStorage.getItem("cartNum") != null){
    numInCart = JSON.parse(sessionStorage.getItem("cartNum"));
}
let cart = [];
if (sessionStorage.getItem("cart") != null){
    cart = JSON.parse(sessionStorage.getItem("cart"));
}
let totalPrice = 0;

if(sessionStorage.getItem("total")!=null){
    totalPrice = JSON.parse(sessionStorage.getItem("total"));
}
class item{
    name:string;
    price:number;
    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }
}
function updateCart(){
    sessionStorage.setItem("cartNum",numInCart.toString());
    document.getElementById("numItems").innerHTML = numInCart.toString();
}
function addToCart(name:string,price:number):void{
    numInCart++;
    updateCart();
    let theItem = new item(name,price);
    cart.push(JSON.stringify(theItem));
    sessionStorage.setItem("cart",JSON.stringify(cart));
    totalPrice += price;
    console.log(totalPrice);
    sessionStorage.setItem("total",JSON.stringify(totalPrice));
}