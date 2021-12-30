import React from "react";
import Menu from "./components/menu/Menu.component";
import Catalog from "./components/catalog/Catalog.component";
import Footer from "./components/footer/Footer.component";
import './App.css';



const App = () => {
  return <div className="whole">
    <div className="main">
      <Menu/>
      <section css="background-color: cornflowerblue; height: 100%;">

        <Catalog/>
        
      </section>

      <Footer/>

    </div>
  </div>
}



export default App;
