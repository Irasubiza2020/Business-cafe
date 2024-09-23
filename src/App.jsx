import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from"./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Benefites from "./Components/Benefites/Benefites";
import Mission from "./Components/Mission/Mission";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Benefites/>
    <Mission/>
    <Footer/>
    </div>
  );
}
export default App;


