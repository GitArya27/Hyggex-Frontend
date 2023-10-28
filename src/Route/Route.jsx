import { Routes, createBrowserRouter } from "react-router-dom";
import Home from "../components/LandingPage/Home";
import Layout from "../layout/Layout";
import Login from "../components/auth/Login";
import React from "react";
import SignIn from "../components/signIn/signIn";
import SignUp from "../components/signUp/signUp";
import TestPage from "../components/LandingPage/TestPage/TestPage";

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
        element: <Login/>
    },
    {
        path:'/signUp',
        element: <SignUp/>
    },
    {
        path:'/signIn',
        element: <SignIn/>
    }



]
)
