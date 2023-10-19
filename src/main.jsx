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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path: "/details/:id",
        element: <Private><Details></Details></Private>,
        
      },{
        path : "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/products/${params.id}`)
            .then(response => {
              console.log("Response status:", response.status);
              return response.json();
            })
            .then(data => {
              console.log(data); // Log the fetched data
              return data;
            })
            .catch(error => {
              console.error("Fetch error:", error);
            });
        }
        
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
