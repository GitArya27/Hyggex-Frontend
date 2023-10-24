import React from "react";
import Hero from "./Hero/Hero";
import Struggle from "./studentStruggle/Struggle";
import Product from "./Product/Product";
import Assessment from "./Psy-ED Assessments/Assesment";
import HowItWorks from "./HowItWorks/HowItWorks";
import Solution from "./Solution/Solution";
import MeetHyggex from "./MeetHyggex/MeetHyggex";
import ContactUs from "./ReachUs/ReachUs";
import FAQPage from "./FAQPage/FAQPage";
import Auth from "../auth/Auth";


function Home() {
    return (
        <div>
           
           <Auth/>
           <Hero/>
           <Struggle/>
           <Product/>
           <Assessment/>
           <HowItWorks/>
           <Solution/>
           <MeetHyggex/>
           <ContactUs />
           <FAQPage />
        </div>
    );
}

export default Home;
