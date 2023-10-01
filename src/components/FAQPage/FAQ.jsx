import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question p-2 rounded-2xl bg-blue-500 text-white">
				{faq.question}
			</div>
			<div className="faq-answer p-1">
				<div className="p-2 rounded-3x1 text-[0.72rem] text-[#06286E]">{faq.answer}</div>
			</div>
		</div>
	)
}

export default FAQ;