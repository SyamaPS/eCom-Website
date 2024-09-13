import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useCartStore } from '../store/store';

const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCartStore();

  const { data: product, isLoading, error } = useQuery(['product', id], () => fetchProduct(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-wrap">
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 object-cover" />
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4">${product.price}</p>
          <p className="mb-8">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white px-6 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
