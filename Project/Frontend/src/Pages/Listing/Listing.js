import React from 'react';
import ProductList from '../Product/index';

const Listing = () => {
  return (
    <ProductList
      apiUrl="http://localhost:5001/api/products" 
      title="Tất cả sản phẩm"
    />
  );
};

export default Listing;