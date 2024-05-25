import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R${product.price}</p>
    </div>
  );
};

export default ProductCard;
