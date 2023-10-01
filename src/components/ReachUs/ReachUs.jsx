import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactUsImg } from "../../constants/url";

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
            <div className="Rectangle10943 h-[710px] bg-indigo-100 rounded-3xl relative flex p-10" >
                <div className="Group47901 w-2/5 p-3 rounded-3xl relative">
                    <div className="ContactUs text-black text-3xl font-medium font-['Inter'] mt-auto relative">Contact Us</div>
                    <div className="p-3"></div>
                    <div className="WeReHereToHelpReachOutAndLetUsKnowHowWeCanAssistYou w-96 text-neutral-700 text-1xl font-normal font-['Inter'] mt-auto relative">We're Here to Help! Reach out and let us know how we can assist you</div>
                    <img src={ContactUsImg} className="l-[400px] h-[400px]" alt="hero-img" />

                </div>
                <div className="Group47901 w-3/5 rounded-3xl relative bg-white justify-center items-center">
                    <div className="m-auto h-[100%]">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group p-5 justify-center items-center">
                                <div className="mb-4">
                                    <input className="form-control bg-blue-250" type="text" id="name" name="user_name" placeholder="Name" required />
                                </div>
                                <div className="mb-4">
                                    <input className="form-control bg-blue-250" type="age" id="age" name="user_age" placeholder="Age" required />
                                </div>
                                <div className="mb-4">
                                    <input className="form-control bg-blue-250" type="mobile" id="mobile" name="user_mobile" placeholder="Mobile" required />
                                </div>
                                <div className="mb-4">
                                    <input className="form-control bg-blue-250" type="email" id="email" name="user_email" placeholder="Email" required />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control bg-blue-250" id="message" name="message" placeholder="Message" required />
                                </div>
                                <div className="button flex justify-center items-center"><button className="btn btn-danger bg-blue-500 w-[22.90rem] h-[2.54rem] mb-[6rem]" type="submit" value="Send">
                                <input type="submit" value="Submit" />
                                </button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
  );
};

export default ContactUs;