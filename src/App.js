import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import WhyHyggex from "./components/WhyHyggex/WhyHyggex";
import Assessment from "./components/Psy-ED Assessments/Assesment";

function App() {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <WhyHyggex/>
           <Assessment/>
           <Footer/>
                  
        </div>
    );
}

export default App;
