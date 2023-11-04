import Assessment from "./Psy-ED Assessments/Assesment";
import Auth from "../auth/Auth";
import ContactUs from "./ReachUs/ReachUs";
import FAQPage from "./FAQPage/FAQPage";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import MeetHyggex from "./MeetHyggex/MeetHyggex";
import Product from "./Product/Product";
import React from "react";
import Solution from "./Solution/Solution";
import Struggle from "./studentStruggle/Struggle";

function Home() {
    return (
        <div>

            {/*<Auth/>*/}
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
