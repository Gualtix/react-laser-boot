document.addEventListener('DOMContentLoaded', () => {
    console.log("hola :v"); 
    add_cards();    
    //add_shopping_cart();

    //show_catalog();
    //hide_shopping_cart();
});

async function add_shopping_cart(){
    var cart = document.getElementById("cart_modal");
    var txt = await (await fetch("/pro/html/cart_modal.html")).text();
    cart.innerHTML += txt;
}

async function add_cards(){
    var catalog = document.getElementById("catalog");
    var txt = await (await fetch("/pro/html/card.html")).text();

    let i = 0;
    while(i < 9){

        catalog.innerHTML += txt;
        i++;
    } 

    var paginator = document.getElementById("catalog");
    var txt = await (await fetch("/pro/html/paginator.html")).text();
    paginator.innerHTML += txt;
}

async function comprar(){

    var modal = document.getElementById('shopping_modal');

    var txt = await (await fetch("/pro/html/shopping_modal.html")).text();
    modal.innerHTML += txt;
    openModal();
}

function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("exampleModal").style.display = "block"
    document.getElementById("exampleModal").classList.add("show")
}
function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").classList.remove("show")
}



function clickCatalog(){
    show_catalog();
    //hide_shopping_cart();
}

function ok_cart(){
    closeModal();
}

/*
function show_catalog(){
    document.getElementById("catalog").style.display = 'flex';
}

function hide_catalog(){
    document.getElementById("catalog").style.display = 'none';
}

function show_shopping_cart(){
    document.getElementById("shopping_cart").style.display = 'block';
}

function hide_shopping_cart(){
    document.getElementById("shopping_cart").style.display = 'none';
}
*/

  
  