import React from "react";
import Menu from "./components/menu/Menu.component";
import Catalog from "./components/catalog/Catalog.component";
import Footer from "./components/footer/Footer.component";
import './App.css';



const App = () => {
  return (
    
  <div className="whole">

    <div style={{display: "flex",justifyContent:"center",backgroundColor:"#0E101C"}}>
      <img src="https://i.pinimg.com/originals/85/c8/3d/85c83d242b73d3c52b8c4c2e7df27db7.jpg" 
      style={{width: "305px"}}/>
    
    </div>
    <div className="main">
      <Menu/>
      <section className="sect">

        <Catalog/>
        
      </section>

      <Footer/>

    </div>
  </div>);
}



export default App;
