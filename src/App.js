import React from "react";

import Navbar from "./components/LandingPage/Navbar/Navbar";
import Hero from "./components/LandingPage/Hero/Hero";
import Footer from "./components/LandingPage/Footer/Footer";
import Assessment from "./components/LandingPage/Psy-ED Assessments/Assesment";
import OurServices from "./components/LandingPage/OurServices/OurServices";
import ReadArticleSummaryCard from "./components/LandingPage/ReadArticleSummaryCard/ReadArticleSummaryCard";
import ContactUs from "./components/LandingPage/ReachUs/ReachUs";
import FAQPage from "./components/LandingPage/FAQPage/FAQPage";
import Struggle from "./components/LandingPage/studentStruggle/Struggle";
import Product from "./components/LandingPage/Product/Product";
import HowItWorks from "./components/LandingPage/HowItWorks/HowItWorks";
import Solution from "./components/LandingPage/Solution/Solution";
import MeetHyggex from "./components/LandingPage/MeetHyggex/MeetHyggex";


function App() {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <Struggle/>
           <Product/>
           <Assessment/>
           <HowItWorks/>
           <Solution/>
           <MeetHyggex/>
           <ContactUs />
           <FAQPage />
           <Footer/>
        </div>
    );
}

export default App;
