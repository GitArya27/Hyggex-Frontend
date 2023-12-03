import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { route, router } from './Route/Route';
import { AuthProvider } from "./components/auth/AuthContext"

const root = document.getElementById('root');
const rootAPI = ReactDOM.createRoot(root);
rootAPI.render(
    <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
);
