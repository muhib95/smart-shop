import { getStoredCart } from "../data/fakeData";

export const productAndCartData=async()=>{
  const productData=await fetch('products.json');
  const products=await productData.json();

const getLocalData=getStoredCart();
const initial=[];
for(const id in getLocalData){
  const fproduct=products.find(product=>product.id===id);
  if(fproduct){
    const quantity=getLocalData[id];
    fproduct.quantity=quantity;
initial.push(fproduct);
  }

}



  return {products,initial};

}