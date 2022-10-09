import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   
      <section>
	<div className="bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Welcome to  Smart Shop!</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Online shopping in Bangladesh for men, women & kids. Buy dress, gift item, beauty products, unique items, jewelry, watch, electronics at smart-shop.com.!</p>
			<div className="flex flex-wrap justify-center">
				<Link to='/products'>
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Go To Buy</button></Link>
				
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
			</div>
		</div>
	</div>
	<img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
</section>
    
  );
};

export default Home;