import React, { useContext } from 'react';
import { addToDb } from '../../data/fakeData';
import { CartContext, ProductContex } from '../layout/Main';
import Product from '../Product/Product';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const products=useContext(ProductContex);
const [cart,setCart]=useContext(CartContext);
  
const addToCart=(addProduct)=>{
let newCart=[];

const exist=cart.find(newProduct=>newProduct.id===addProduct.id);
if(!exist){
addProduct.quantity=1;
newCart=[...cart,addProduct];
}
else{
  const remainProduct=cart.filter(newProduct=>newProduct.id!==addProduct.id);
  exist.quantity=exist.quantity+1;
  newCart=[...remainProduct,exist];
}
setCart(newCart);
addToDb(addProduct.id);
toast.info('Product Added',{autoClose:500});
}
  return (
    <div >
      <div className='grid md:grid-cols-3 gap-5'>
      {
        products.map(product=><Product product={product} key={product.id} addToCart={addToCart}></Product>)
      }
      </div>
    
    </div>
 
    
  );
};

export default Products;