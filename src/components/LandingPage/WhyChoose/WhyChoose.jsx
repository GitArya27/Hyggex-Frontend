import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactUsImg } from "../../../constants/url";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fn1cm9s', 'template_1ciebmo', form.current, '5JsOOLwUgiQUEqvHG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="p-10">
      <div className="h-[710px] bg-indigo-100 rounded-3xl flex p-10">
        <div className="w-2/5 p-3 rounded-3xl">
          <h2 className="text-black text-3xl font-medium mt-auto">Contact Us</h2>
          <p className="w-96 text-neutral-700 text-xl mt-auto">We're Here to Help! Reach out and let us know how we can assist you</p>
          <img src={ContactUsImg} className="w-[400px] h-[400px]" alt="hero-img" />
        </div>
        <div className="w-3/5 rounded-3xl bg-white flex justify-center items-center">
          <div className="m-auto h-full">
            <form ref={form} onSubmit={sendEmail} className="p-5 flex flex-col items-center">
              <input className="bg-blue-250 mb-4 p-2" type="text" id="name" name="user_name" placeholder="Name" required />
              <input className="bg-blue-250 mb-4 p-2" type="text" id="age" name="user_age" placeholder="Age" required />
              <input className="bg-blue-250 mb-4 p-2" type="text" id="mobile" name="user_mobile" placeholder="Mobile" required />
              <input className="bg-blue-250 mb-4 p-2" type="email" id="email" name="user_email" placeholder="Email" required />
              <textarea className="bg-blue-250 mb-4 p-2" id="message" name="message" placeholder="Message" required />
              <button className="bg-blue-500 w-[22.90rem] h-[2.54rem] mb-[6rem] p-2" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
