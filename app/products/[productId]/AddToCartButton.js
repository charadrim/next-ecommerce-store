'use client';
import React, { useState } from 'react';

export default function AddToCartButton({ dataTestId }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <div>
      <button onClick={handleAddToCart} data-test-id={dataTestId}>
        Add to Cart
      </button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
      />
    </div>
  );
}
