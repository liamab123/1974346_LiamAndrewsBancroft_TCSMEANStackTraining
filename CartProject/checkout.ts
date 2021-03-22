let cartItems = [];
if (sessionStorage.getItem("cart") != null){
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
}
let total = 0;
if(sessionStorage.getItem("total")!=null){
    total = JSON.parse(sessionStorage.getItem("total"));
}
function showCart(){
    for(var i of cartItems){
        let curItem = JSON.parse(i);
        let curName = curItem.name;
        let curPrice = curItem.price;
        let holder = document.getElementById("cartTable");
        let itemDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
        let priceDiv = document.createElement("div");
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
function showTotal(){
    document.getElementById("total").innerHTML = total.toString();
}