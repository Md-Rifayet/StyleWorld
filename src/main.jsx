import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Main from './Component/Layout/Main.jsx';
import OrderReview from './Component/OrderReview/OrderReview.jsx';
import Grandpa from './Component/Grandpa/Grandpa.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirt.json')
      },

      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  
  </React.StrictMode>,
)
