import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Register from './pages/welcome/Register.jsx';
import Login from './pages/welcome/Login.jsx';
import PasswordReset from './pages/welcome/PasswordReset.jsx';
import PasswordUpdateForm from './pages/welcome/PasswordUpdateForm.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import RegisterBuild from './pages/Dashboard/RegisterBuild.jsx';
import Buildings from './pages/Dashboard/Buildings.jsx'
import AddBuild from './pages/Dashboard/AddBuild.jsx';
import Users from './pages/Dashboard/Users.jsx';
import Propiedades from './pages/Dashboard/Propiedades.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/password-reset",
    element: <PasswordReset/>,
  },
  {
    path: "/password-update",
    element: <PasswordUpdateForm/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/RegisterBuild",
    element: <RegisterBuild/>,
  },
  {
    path: "/Buildings",
    element: <Buildings/>,
  },
  {
    path: "/AddBuild",
    element: <AddBuild/>,
  },
  {
    path: "/Users",
    element: <Users/>,
  },
  {
    path: "/Propiedades",
    element: <Propiedades/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
