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


function ok_cart(){
    closeModal();
}