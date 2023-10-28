import { Route, Routes } from "react-router-dom";

import Home from "../src/components/LandingPage/Home";
import Layout from "../src/layout/Layout";
import Login from "../src/components/auth/Login";
import React from "react";
import SignIn from "./components/signIn/signIn";
import SignUp from "../src/components/signUp/signUp";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn/>} />
        </Routes>
    );
}
