import React, { useState } from 'react';
import FAQ from './FAQ';
import './FAQPage.css';

function FAQPage() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How to book a HomeService Apartment? When is the earliest schedule?',
            question1: 'Can we directly call the branch nearest to our house to schedule for a home service appointment?',
            answer: 'Yes. On our websit, click on Find Our Lab and click on chosen branch view their contact information and location.',
            open: true
        },
        {
            question: 'How many patients can you accomodate for Home Service?',
            answer: 'You. The Viewer.',
            open: false
        },
        {
            question: 'Do you have doctors who can do house calls?',
            answer: 'This many.',
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div className="bg-zinc-100 relative p-4 mx-auto">
            <div className="text-center text-3xl text-zinc-800">FAQ Hub</div>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}

export default FAQPage;