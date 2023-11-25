import { Routes, createBrowserRouter } from "react-router-dom";

import Auth from "../components/auth/Auth";
import Auth2 from "../components/auth/AuthLeft";
import AuthLeft from "../components/auth/AuthLeft";
import Home from "../components/LandingPage/Home";
import Layout from "../layout/Layout";
import Login from "../components/auth/Login";
import React from "react";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import TestPage from "../components/LandingPage/TestPage/TestPage";
import TestResult from "../components/LandingPage/TestResult/TestResult";

//import SignUp from "../components/signUp/signUp"

//import SignIn from "../components/signIn/signIn";

export const router =createBrowserRouter(
    [{
       path:'/',
       element:<Layout/>,
       children:[
        {
            path:'',
            element:<Home/>
        },
        {
            path: "/test",
            element:<TestPage/>
        },
        {
            path:'/testResult',
            element: <TestResult/>
        }
            ]
    },
    {
        path:'/login',
        element: <SignIn/>
    },
    {
        path:'/signUp',
        element: <SignUp/>
    },
    {
        path:'/signIn',
        element: <SignIn/>
    },




]
)

