import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../data/fakeData';

import CartItem from '../CartItem/CartItem';
import { CartContext } from '../layout/Main';

const Cart = () => {
const [cart,setCart]=useContext(CartContext);

let total=0;
for(const pro of cart){
	total=total+pro.price*pro.quantity;

}


const removeItem=(product)=>{
	const remainCart=cart.filter(c=>c.id!==product.id);
	setCart(remainCart);
	removeFromDb(product.id);

}
const deleteAll=()=>{
setCart([]);
deleteShoppingCart();
}

  return (
    <div className='flex justify-center'>
			    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
	<h2 className="text-xl font-semibold">Your cart</h2>
	{
				cart.map(product=><CartItem product={product} key={product.id} removeItem={removeItem}></CartItem>)
			}
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold">{total} €</span>
		</p>
		<p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
		<Link to='/products'>
		<button type="button" className="px-6 py-2 border rounded-md border-violet-400">Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
		</Link>
		
		<button onClick={()=>deleteAll()} type="button" className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
</div>
    </div>
		
		</div>
  );
};

export default Cart;