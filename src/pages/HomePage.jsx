import React from 'react';
import { useQuery } from '@tanstack/react-query'; // Ensure this is from the right package
import { useCartStore } from '../store/store';   // Import Zustand store
import { FaHeart, FaShareAlt, FaBalanceScale } from 'react-icons/fa'; // Icons for like, share, and compare

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const HomePage = () => {
  // Updated useQuery with object syntax for React Query v5
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const { addToCart } = useCartStore();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className="container mx-auto py-16">
      {/* Header Section */}
      {/* <h1 className="text-3xl font-bold text-center mb-8">Shop All Products</h1> */}

      {/* New Arrivals Section */}
      <div className="relative mb-16">
        <img
          src="https://www.shutterstock.com/image-illustration/3d-illustration-beauty-woman-casual-260nw-1701837601.jpg" // Replace with your image URL
          alt="Discover New Arrivals"
          className="w-full h-80 object-cover" // Adjusted height for a bigger image
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold mb-4">Discover New Arrivals</h2>
          <button
            onClick={() => window.scrollTo({ top: document.getElementById('product-list').offsetTop, behavior: 'smooth' })}
            className="bg-yellow-500 text-white px-6 py-2 rounded"
          >
            Explore New Arrivals
          </button>
        </div>
      </div>

      {/* Browse the Range Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Browse the Range</h2>
        <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-center gap-4">
          <img
            src="https://i.pinimg.com/736x/0e/9e/14/0e9e144c2a2cf1bb24d10963a4b0948f.jpg" // Replace with your image URL
            alt="Range Image 1"
            className="w-[5cm] h-[8cm] object-cover"
          />
          
          <img
            src="https://i.pinimg.com/236x/13/c9/7e/13c97e61716ac12c828e47c99cebef75.jpg" // Replace with your image URL
            alt="Range Image 2"
            className="w-[5cm] h-[8cm] object-cover"
          />
          
          <img
            src="data:image/jpeg;base64,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" // Replace with your image URL
            alt="Range Image 2"
            className="w-[5cm] h-[8cm] object-cover"
          />
         
        </div>
      </div>

      {/* New Section Between Products and Footer */}
     

      {/* Product List Section */}
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div  id="product-list" className= "mb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative p-4 border group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
            <p className="mt-2">${product.price}</p>

            {/* Add to Cart Button (Visible on Hover) */}
            <button
              onClick={() => addToCart(product)}
              className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"
            >
              Add to Cart
            </button>

            {/* Like, Share, and Compare Icons */}
            <div className="flex justify-between mt-2">
              <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer" />
              <FaShareAlt className="text-gray-600 hover:text-blue-500 cursor-pointer" />
              <FaBalanceScale className="text-gray-600 hover:text-yellow-500 cursor-pointer" />
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex justify-between items-center mb-16">
        <div className="flex-1 pr-8">
          <h2 className="text-2xl font-bold mb-4">50+ Collections</h2>
          <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id eros sit amet ligula malesuada cursus.</p>
          <button
            onClick={() => {/* Add your button functionality here */}}
            className="bg-yellow-500 text-white px-6 py-2 rounded"
          >
            Explore More
          </button>
        </div>
        <div className="flex-1 flex gap-4">
          <img
            src="https://i.pinimg.com/736x/c0/db/9e/c0db9ed759e0be4d8f3aa6cee8baaca6.jpg" // Replace with your image URL
            alt="Collection Image 1"
            className="w-[5cm] h-[8cm] object-cover"
          />
          <img
            src="data:image/jpeg;base64,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" // Replace with your image URL
            alt="Collection Image 2"
            className="w-[5cm] h-[8cm] object-cover"
          />
        </div>
      </div>

      <div className="text-center mb-16">
  <h2 className="text-2xl font-bold mb-4">Share Your Setup</h2>
  <h1 className="text-3xl font-bold mb-8">#eCommerce</h1>
  <div className="grid grid-cols-3 gap-[0.5cm]">
    <div className="flex flex-col gap-[0.5cm]">
      <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSy1KlBxsh3LkaR692afMBOu5A2gUvNMtd6LKm4JhSAefigubh51-ERH220KWIKCPjeGVA5a3xuTp0paoEe8WIu6P3vSR3mki3kVZe-wwWB" alt="Image 1" className="w-[10cm] h-[8cm] object-cover" />
      <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjLc-g2ke-jYv7LVJ2q2aR6QvKZBgFUAVk3ArBJMeASsWgBZsgTbBGC3swAnD3AuXrj6NYRuJifOJQm2Joe_ecs2KE5ZEW5idA93h4u4U" alt="Image 2" className="w-[10cm] h-[8cm] object-cover" />
      <img src="https://images.meesho.com/images/products/360000453/rh3lq_1200.jpg" alt="Image 3" className="w-[10cm] h-[8cm] object-cover" />
    </div>
    <div className="flex flex-col gap-[0.5cm]">
      <img src="https://www.okboss.co.in/assets/img/home/boysrow1/kids%20musterd%20jacket%20with%20white%20tshirt%20party%20wear%20dress.jpg" alt="Image 4" className="w-[10cm] h-[8cm] object-cover" />
      <img src="https://fashiondream.co.in/cdn/shop/products/P1679000.jpg?v=1665214182&width=533" alt="Image 5" className="w-[10cm] h-[8cm] object-cover" />
      <img src="https://www.bookmycostume.com/cdn/shop/products/2911738_6_2000x.jpg" alt="Image 6" className="w-[10cm] h-[8cm] object-cover" />
    </div>
    <div className="flex flex-col gap-[0.5cm]">
      <img src="https://images.meesho.com/images/products/132799908/chpxm_1200.jpg" alt="Image 7" className="w-[10cm] h-[8cm] object-cover" />
      <img src="https://images.meesho.com/images/products/423062312/ptgoj_1200.jpg" alt="Image 8" className="w-[10cm] h-[8cm] object-cover" />
      <img src="https://images.meesho.com/images/products/440410161/avy0y_1200.jpg" alt="Image 9" className="w-w-[10cm] h-[8cm] object-cover" />
    </div>
  </div>
</div>

    </div>
    

 

  );
};

export default HomePage;
