import { Route, Routes } from "react-router-dom";

import Home from "../src/components/LandingPage/Home";
import Layout from "../src/layout/Layout";
import Login from "../src/components/auth/Login";
import React from "react";
import SignUp from "./components/signUp/signUp";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/signUp" element={<SignUp/>} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
