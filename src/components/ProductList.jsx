// import React from 'react';
// import { useQuery } from '@tanstack/react-query';

// const fetchProducts = async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   return res.json();
// };

// const ProductList = () => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['products'],
//     queryFn: fetchProducts,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching products</div>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {data.map(product => (
//         <div key={product.id} className="p-4 border">
//           <img src={product.image} alt={product.title} className="w-full h-48 object-cover"/>
//           <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
//           <p className="mt-2">${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useCartStore } from '../store/store'; // Import Zustand store

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const FeaturedProductList = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: fetchProducts,
  });

  const { addToCart } = useCartStore(); // Zustand store's addToCart function

  if (isLoading) return <div>Loading featured products...</div>;
  if (error) return <div>Error fetching featured products</div>;

  return (
    <div  className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => ( // Assuming showing 4 featured products
          <div key={product.id} className="p-4 border relative group">
            <div className="relative">
              {/* Product Image - Hover to zoom, clickable to add to cart */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110 cursor-pointer"
                onClick={() => addToCart(product)} // Click on image to add to cart
              />
              {/* Overlay to show "Add to Cart" on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
            <p className="mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductList;

