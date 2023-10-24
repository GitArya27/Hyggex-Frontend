import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Login from "../src/components/auth/Login";
import Home from "../src/components/LandingPage/Home";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
        </Routes>
    );
}
