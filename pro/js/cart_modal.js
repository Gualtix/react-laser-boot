async function click_shopping_cart(){
    var modal = document.getElementById('cart_modal');

    var txt = await (await fetch("/pro/html/cart_modal.html")).text();
    modal.innerHTML += txt;
    open_cartModal();
}



function open_cartModal() {
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("aceptcartmodal").style.display = "block";
    document.getElementById("aceptcartmodal").classList.add("show");
}
function close_cartModal() {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("aceptcartmodal").style.display = "none";
    document.getElementById("aceptcartmodal").classList.remove("show");
}