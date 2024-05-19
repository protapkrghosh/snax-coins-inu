import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
