import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { route, router } from './Route/Route';


const root = document.getElementById('root');
const rootAPI = ReactDOM.createRoot(root);
rootAPI.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
