import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import WhyHyggex from "./components/WhyHyggex/WhyHyggex";
import OurServices from "./components/OurServices/OurServices";

function App() {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <WhyHyggex/>
           <OurServices/>
           <Footer/>
                  
        </div>
    );
}

export default App;
