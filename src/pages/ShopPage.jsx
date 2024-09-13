// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { useCartStore } from '../store/store'; // Import the Zustand store

// const fetchProducts = async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   return res.json();
// };

// const ShopPage = () => {
//   const { data: products, error, isLoading } = useQuery({
//     queryKey: ['products'],
//     queryFn: fetchProducts,
//   });

//   const { addToCart } = useCartStore(); // Zustand store's addToCart function

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching products</div>;

//   return (
//     <div className="container mx-auto py-16">
//       <h1 className="text-3xl font-bold text-center mb-8">Shop All Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map(product => (
//           <div key={product.id} className="p-4 border relative">
//             <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
//             <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
//             <p className="mt-2">${product.price}</p>
//             <a href={`/product/${product.id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 inline-block">
//               View Details
//             </a>
//             <button
//               onClick={() => addToCart(product)} // Add product to the cart
//               className="absolute top-2 right-2 bg-green-500 text-white px-4 py-2"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopPage;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useCartStore } from '../store/store'; // Import Zustand store
import { FaHeart, FaShareAlt, FaBalanceScale } from 'react-icons/fa'; // Import icons

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const ShopPage = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { addToCart } = useCartStore(); // Zustand store's addToCart function

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Shop All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="p-4 border relative">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
            <p className="mt-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-white text-orange-500 px-4 py-2 border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              Add to Cart
            </button>
            <div className="flex space-x-4 mt-4">
              <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer" />
              <FaShareAlt className="text-gray-500 hover:text-blue-500 cursor-pointer" />
              <FaBalanceScale className="text-gray-500 hover:text-green-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

