
// declarations

var favs = Array.from(document.querySelectorAll(".fa-heart"));

var deletebtn = Array.from(document.querySelectorAll(".fa-trash-alt"));

var cards = Array.from(document.querySelectorAll(".full_char"));

var plusbtn = Array.from(document.querySelectorAll(".fa-plus-circle")); 

var minusbtn = Array.from(document.querySelectorAll(".fa-minus-circle"));


// favorites

for (let fav of favs){
    fav.addEventListener("click",function(){
        if(fav.style.color == "black"){
            fav.style.color = "red";
        } else {
            fav.style.color = "black";
        }
    });
}


// delete item

for (let i in deletebtn ) {
    deletebtn[i].addEventListener("click", function(){
        cards[i].remove();
        total();
    });
}

// add button

for (let plus of plusbtn){
    plus.addEventListener("click", function(){
       plus.nextElementSibling.innerHTML++;
       total();
    });
} 

// minus button

for (let minus of minusbtn){
    minus.addEventListener("click", function(){
        minus.previousElementSibling.innerHTML > 0 ? minus.previousElementSibling.innerHTML-- : null;
        total();
    });
}


// total price

function total(){
    let qte = Array.from(document.querySelectorAll(".qtn"));
    let price = Array.from(document.querySelectorAll(".unit-price"));
    let s = 0;
    for (let i = 0; i < price.length; i++){
        s = s + price[i].innerHTML*qte[i].innerHTML;
    }
    document.getElementById("total-price").innerHTML = s;
}