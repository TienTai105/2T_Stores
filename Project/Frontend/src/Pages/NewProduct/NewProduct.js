import React from 'react';
import ProductList from '../Product/index';

const NewProducts = () => {
  return (
    <ProductList
      apiUrl="http://localhost:5001/api/products/new"  // API cho sản phẩm mới
      title="Sản phẩm mới"
    />
  );
};

export default NewProducts;