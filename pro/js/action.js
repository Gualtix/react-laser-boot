document.addEventListener('DOMContentLoaded', () => {
    add_cards();    
});

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

