import React from 'react';
import ProductList from '../Product/index';

const BestSeller = () => {
  return (
    <ProductList
      apiUrl="http://localhost:5001/api/products"  // API cho sản phẩm mới
      title="Sản phẩm bán chạy"
    />
  );
};

export default BestSeller;