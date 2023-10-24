import { Link } from 'react-router-dom'
import { Logo } from '../../constants/url'
import React from 'react'

const SignUp = () => {
    const login1 = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181188/login_1_mjpshn.svg";
    const login2 = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181349/login_2_zmmwrs.svg";
    const login3 = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181445/login_3_y0ib97.svg";
    const logo = "https://res.cloudinary.com/dbnxbly1r/image/upload/v1698181752/Component_9_dqkwgp.png";


    return (
        <div className='lg:flex-row justify-between'>
            <div>
                <img src={logo} alt="" />
                <div>
                    <img src={login1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, beatae.</p>
                    <button></button>
                </div>
            </div>

            <div className='flex flex-column text-center'>
                <div>
                    <h1>Sign Up</h1>
                    <p>Enter profile details</p>
                </div>
                <div>
                    <span>Enter number</span>
                    <span>Enter basic details</span>
                </div>
                <p>We will need your profile details to give you a better experience</p>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Sam christy" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Samchristy98879@gmail.com" />

                    <div>
                        <label htmlFor="location">Location</label>
                        <select name="location" id="">
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="india">Afghanistan</option>
                        </select>
                        <label htmlFor="grade">Grade</label>
                        <select name="grade" id="">
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="india">Afghanistan</option>
                        </select>
                    </div>
                    <button type='submit'>Continue</button><br />
                    <span>Already have an account <Link>login</Link></span>
                </form>
            </div>

        </div>
    )
}

export default SignUp
