document.addEventListener('DOMContentLoaded', () => {
    console.log("hola :v"); 
    add_cards();    
});

function add_cards(){
    var catalog = document.getElementById("catalog");

    let i = 0;
    while(i < 9){
        catalog.innerHTML += 
        `
        <div class="card" style="width: 19rem; background-color: rgba(255, 20, 145, 0); border: none;">
            <div class="card-sl">
                <div class="card-image">
                    <img src="https://biketoday.news/storage/articles/3857/1568643575_main.jpg" />
                </div>

                <div class="card-heading">
                    Norco MTB Bike
                </div>

                <div class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </div>

                <div class="card-heading">
                    Q475.50
                </div>

                <a href="#" class="card-button">COMPRAR</a>
            </div>
        </div>  
        `;
        i++;
    }
}
  
  
  