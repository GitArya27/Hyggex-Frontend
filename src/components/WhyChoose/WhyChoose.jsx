import React from "react";
import { HeroImg } from "../../constants/url";

const WhyChooseCard = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className="p-10">
            <div className="Rectangle10943 h-[710px] bg-indigo-100 rounded-3xl relative flex p-10" >
                <div className="Group47901 w-2/5 p-3 rounded-3xl relative">
                    <div className="ContactUs text-black text-3xl font-medium font-['Inter'] mt-auto relative">Contact Us</div>
                    <div className="p-3"></div>
                    <div className="WeReHereToHelpReachOutAndLetUsKnowHowWeCanAssistYou w-96 text-neutral-700 text-2xl font-normal font-['Inter'] mt-auto relative">We're Here to Help! Reach out and let us know how we can assist you</div>
                    <img src={HeroImg} className="l-[400px] h-[400px]" alt="hero-img" />

                </div>
                <div className="Group47901 w-3/5 rounded-3xl relative bg-white justify-center items-center">
                    <div className="m-auto h-[100%]">
                        <form onSubmit={onSubmit}>
                            <div className="form-group p-5 justify-center items-center">
                                <div className="mb-4">
                                    <input className="form-control bg-blue-250" type="text" id="name" placeholder="Name" required />
                                </div>
                                <div className="mb-4">

                                    <input className="form-control bg-blue-250" type="age" id="age" placeholder="Age" required />
                                </div>
                                <div className="mb-4">
                                    <input className="form-control bg-blue-250" type="mobile" id="mobile" placeholder="Mobile" required />
                                </div>
                                <div className="mb-4">
                                    <input className="form-control bg-blue-250" type="email" id="email" placeholder="Email" required />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control bg-blue-250" id="message" placeholder="Message" required />
                                </div>
                                <div className="button p-2"><button className="btn btn-danger bg-red-500" type="submit">
                                    {formStatus}
                                </button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default WhyChooseCard;