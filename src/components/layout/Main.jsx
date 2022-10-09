
import { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
// import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const ProductContex=createContext([]);
export const CartContext=createContext([]);
const Main = () => {
  
  
  const {products,initial}=useLoaderData();
  const [cart,setCart]=useState(initial);
  console.log(cart);
  
  return (
    
      
    <ProductContex.Provider value={products}>
    <CartContext.Provider value={[cart,setCart]}> 
      <Header></Header>
      <Outlet></Outlet>
     <Footer></Footer>
     </CartContext.Provider>
    </ProductContex.Provider>
   
   
      
    
  );
};

export default Main;