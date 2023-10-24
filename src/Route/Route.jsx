import React from "react";
import { Routes, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/LandingPage/Home";
import Login from "../components/auth/Login";

export const router =createBrowserRouter(
    [{
       path:'/',
       element:<Layout/>,
       children:[
        {
            path:'',
            element:<Home/>
        },
            ]
    },
    {
        path:'/login',
        element: <Login/>
    }

    
]
)

