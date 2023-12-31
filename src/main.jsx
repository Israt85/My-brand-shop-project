import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import SignUp from './Components/Pages/SignUp.jsx';
import Login from './Components/Pages/Login.jsx';
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import AddProduct from './Components/AddProduct/AddProduct';
import BrandDetails from './Components/BrandDetails';
import Private from './Components/Private/Private';
import Details from './Components/Details';
import Update from './Components/Update';
import ErrorPage from './Components/ErrorPage';
import MyCart from './Components/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json')
      },{
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/addproduct",
        element:<Private> <AddProduct></AddProduct></Private>
      },
      {
        path:"/brand/:brand",
        element: <Private><BrandDetails></BrandDetails></Private>,
        loader: () => fetch(" https://my-brand-shop-server-hkus42lxn-israts-projects.vercel.app/products")
      },
      {
        path: "/details/:id",
        element: <Private><Details></Details></Private>,
        
      },{
        path : "/update/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) => { return fetch(` https://my-brand-shop-server-hkus42lxn-israts-projects.vercel.app/products/${params.id}`)
           
        }
        
        },{
          path: '/cart',
          element:<Private><MyCart></MyCart></Private>,
          loader: () =>fetch(' https://my-brand-shop-server-hkus42lxn-israts-projects.vercel.app/cart')
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
