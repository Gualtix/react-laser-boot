document.addEventListener('DOMContentLoaded', () => {
    add_cards();    
});

async function add_cards(){
    var catalog = document.getElementById("catalog");
    var txt = await (await fetch("/pro/html/card.html")).text();

    var stock = await fetch('/pro/js/stock.json').then(response => response.json());

    let i = 0;
    while(i < stock.length){

        var parser = new DOMParser();
        var tmp_html = parser.parseFromString(txt, 'text/html');
        var card_template = tmp_html.getElementById("cardis");

        var name = tmp_html.getElementById("name");   
        name.innerHTML = stock[i].name;

        var price = tmp_html.getElementById("price");
        price.innerHTML = "Q "+stock[i].price;

        var img = tmp_html.getElementById("images");
        img.src = stock[i].img;

        var product = stock[i];
        card_template.dataset.productId = stock[i].code;
        card_template.addEventListener('click', (e) => {
            console.log(product);
        });



        /*
        const response = await fetch(`https://picsum.photos/500`);
        const blob = await response.blob();

        const url = URL.createObjectURL(blob);

        var img = tmp_html.getElementById("images");
        img.src = url;
        */

        catalog.appendChild(card_template)
        i++;
    } 

    //var paginator = document.getElementById("catalog");
    //var txt = await (await fetch("/pro/html/paginator.html")).text();
    //paginator.innerHTML += txt;
}

