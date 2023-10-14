import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactUsImg } from '../../../constants/url';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        'service_fn1cm9s',
        'template_1ciebmo',
        form.current,
        '5JsOOLwUgiQUEqvHG'
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <div className="p-10">
      <div className=" bg-[#DFEAFF] rounded-3xl flex p-10 sm:flex-row xs:flex-col">
        <div className="bg-white rounded-[24px] flex justify-center items-center sm:w-[27.68rem] py-[2.6rem]">
          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col justify-center items-center">
            {['Name', 'Age', 'Mobile', 'Email'].map((placeholder, index) => (
              <input
                key={index}
                className="bg-[#F2F2F2] mb-4 p-2 rounded w-[80%] "
                type={placeholder === 'Email' ? 'email' : 'text'}
                id={placeholder.toLowerCase()}
                name={`user_${placeholder.toLowerCase()}`}
                placeholder={placeholder}
                required
              />
            ))}
            <textarea style={{ resize: 'none' }
}
              className="bg-[#F2F2F2] w-[80%]  mb-4 p-2 rounded"
              id="message"
              name="message"
              placeholder="Query"
              required
            />
            <button className="bg-[#316ADE] w-[80%] rounded p-2 text-white font-medium hover:bg-[#0070D7]" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="sm:pl-[3rem] rounded  sm:mt-0 xs:mt-5 ">
          <h2 className="text-black text-[1.36rem] font-medium mb-[1.45rem]">Contact Us</h2>
          <p className="w-96 text-neutral-700 text-[0.81rem] mt-auto">
            We're Here to Help! Reach out and let us know how we can assist you
          </p>
          <div >
          <img src={ContactUsImg} className="translate-y-[2.5rem] " alt="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
