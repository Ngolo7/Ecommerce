import React from "react";
import ProductList from "../components/ProductList";

const WomensProductList = ({ onAddToCart }) => {
  return (
    <ProductList
      gender="women"
      title="Women's Shoes"
      onAddToCart={onAddToCart}
    />
  );
};

export default WomensProductList;
