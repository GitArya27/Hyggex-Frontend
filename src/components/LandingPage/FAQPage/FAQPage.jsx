import React, { useState } from 'react';
import FAQ from './FAQ';

function FAQPage() {
    const [faqs, setfaqs] = useState([
        {
            question: 'What is HyggeX, and how does it work?',
            answer: 'HyggeX is an adaptive learning platform that offers personalized educational content and tools. It assesses your strengths and weaknesses through psychoeducational tests and tailors your learning journey accordingly.',
            open: true
        },
        {
            question: 'What types of content does HyggeX offer?',
            answer: "HyggeX provides a wide range of content, including articles, quizzes, workshops, and educational tools. You'll find resources to improve your vocabulary, comprehension, general knowledge, and more.",
            open: false
        },
        {
            question: 'Is HyggeX suitable for students of all ages and academic levels?',
            answer: 'Absolutely. HyggeX caters to learners of all ages, from school students to lifelong learners. The content adapts to your specific level and goals.',
            open: false
        }
    ]);

    const toggleFAQ = (index) => {
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
        <div className="bg-[#F9F9F9] w-full py-10 ">
            <div className="text-center text-[2.18rem] text-[#28262C] font-medium my-[1.81rem]"><span className='text-[#06286E]'>FAQ</span> Hub</div>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} key={i} />
                ))}
            </div>
        </div>
    );
}

export default FAQPage;



