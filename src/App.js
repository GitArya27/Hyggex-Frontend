import { Route, Routes } from "react-router-dom";

import Home from "../src/components/LandingPage/Home";
import Layout from "../src/layout/Layout";
import Login from "../src/components/auth/Login";
import React from "react";
import SignIn from "./components/signIn/signIn";
import SignInForm from "./components/auth/SignIn";
import SignUp from "../src/components/signUp/signUp";
import SignUpForm from "./components/auth/SignUp";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />

            </Route>
            {/*<Route path="/login" element={<Login />} />
            <Route path="/signUpForm" element={<SignUpForm />} />
            <Route path="/signInForm" element={<SignInForm/>} />*/}
        </Routes>
    );
}
