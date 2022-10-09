import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Contact from "../components/Contact/Contact";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Main from "../components/layout/Main";
import Products from "../components/Products/Products";
import { productAndCartData } from "../loader/loader";

export const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<Error></Error>,
    loader:productAndCartData,
    children:[
      {path:'/',
      element:<Home></Home>,},
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
}]);
