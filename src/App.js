import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import WhyHyggex from "./components/WhyHyggex/WhyHyggex";
import Assessment from "./components/Psy-ED Assessments/Assesment";
import OurServices from "./components/OurServices/OurServices";
import ReadArticleSummaryCard from "./components/ReadArticleSummaryCard/ReadArticleSummaryCard";
import ContactUs from "./components/ReachUs/ReachUs";
import FAQPage from "./components/FAQPage/FAQPage";


function App() {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <ReadArticleSummaryCard />
           <WhyHyggex/>
           <OurServices/>
           <Assessment/>
           <ContactUs />
           <FAQPage />
           <Footer/>
        </div>
    );
}

export default App;
