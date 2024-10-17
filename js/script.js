

var allProducts = document.querySelectorAll(".itemscontent .item1")
var div = document.querySelector("#div11")
var btn = document.querySelector("#btnn")
var totalPrice = 0

allProducts.forEach(function(item){
 item.onclick = function (){

     totalPrice +=  +(item.getAttribute("price"))
     console.log(totalPrice)

     if (totalPrice >0 ){
         btn.style.display = "block";
     
     }
 }
})
btn.onclick = function (){
 div.style.display = "block";
div.innerHTML="Total Price : "+totalPrice +"  EGP"
}