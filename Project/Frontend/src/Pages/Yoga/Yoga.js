import React from 'react';
import ProductList from '../Product/index';

const Yoga = () => {
  return (
    <ProductList
      apiUrl="http://localhost:5001/api/products"  // API cho sản phẩm mới
      title="Yoga"
    />
  );
};

export default Yoga;