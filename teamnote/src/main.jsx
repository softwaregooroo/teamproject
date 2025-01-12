import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './component/login/login.jsx'
import Signup from './component/login/signup.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    
  },
   
  {
      path: "/signup",
      element: <Signup />,
  },
    
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
