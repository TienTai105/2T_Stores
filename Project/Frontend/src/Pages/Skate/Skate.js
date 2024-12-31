import React from 'react';
import ProductList from '../Product/index';

const Skate = () => {
  return (
    <ProductList
      apiUrl="http://localhost:5001/api/products"  // API cho sản phẩm mới
      title="Skate"
    />
  );
};

export default Skate;