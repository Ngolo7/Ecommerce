import React from "react";
import ProductList from "../components/ProductList";

const MensProductList = ({ onAddToCart }) => {
  return (
    <ProductList gender="men" title="Men's Shoes" onAddToCart={onAddToCart} />
  );
};

export default MensProductList;
