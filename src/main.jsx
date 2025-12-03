import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './AuthProvider/AuthProvider';




createRoot(document.getElementById('root')).render(
   <StrictMode>
      <AuthProvider>
          <RouterProvider router={Router} /> 
          <ToastContainer />
      </AuthProvider>
   </StrictMode>,
)