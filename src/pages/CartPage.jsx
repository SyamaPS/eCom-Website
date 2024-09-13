import React from 'react';
import CartItem from '../components/CartItem';
import { useCartStore } from '../store/store';  // Correct import path for Zustand store

const CartPage = () => {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return <div className="p-8 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cart.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
