import { Routes, createBrowserRouter } from "react-router-dom";

import Auth from "../components/auth/Auth";
import Auth2 from "../components/auth/AuthLeft";
import AuthLeft from "../components/auth/AuthLeft";
import Home from "../components/LandingPage/Home";
import Layout from "../layout/Layout";
import Login from "../components/auth/Login";
import React from "react";
import SignInForm from "../components/auth/SignIn";
import SignUpForm from "../components/auth/SignUp";
import TestPage from "../components/LandingPage/TestPage/TestPage";

//import SignUp from "../components/signUp/signUp";



//import SignIn from "../components/signIn/signIn";





// import TestPage from "../components/LandingPage/TestPage/TestPage";

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
        }
            ]
    },
    {
        path:'/login',
        element: <SignInForm/>
    },
    {
        path:'/signUp',
        element: <SignUpForm/>
    },
    {
        path:'/signIn',
        element: <SignInForm/>
    }



]
)

