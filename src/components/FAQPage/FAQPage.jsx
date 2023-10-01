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
            question: ' What is HyggeX, and how does it work?',
            answer: 'HyggeX is an adaptive learning platform that offers personalized educational content and tools. It assesses your strengths and weaknesses through psychoeducational tests and tailors your learning journey accordingly.',
            open: false
        },
        {
            question: 'How does HyggeX adapt to my learning needs?',
            answer: 'HyggeX uses advanced algorithms to analyze your psychoeducational test results and learning preferences. It then suggests content and learning strategies tailored to your unique needs.',
            open: false
        },
        {
            question: 'Is there a free trial available?',
            answer: 'Yes, HyggeX offers a free basic plan so you can experience the platform before deciding to subscribe to a premium plan.',
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