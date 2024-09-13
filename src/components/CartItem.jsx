import React from 'react';
import { useCartStore } from '../store/store';

const CartItem = ({ product }) => {
  const { removeFromCart } = useCartStore();

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm">${product.price}</p>
      </div>
      <button
        onClick={() => removeFromCart(product.id)}
        className="bg-red-500 text-white px-4 py-2"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
