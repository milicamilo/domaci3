import React from "react";
import ProductCard from "./ProductCard";

function Products({ products }) {
  return (
    <div className="container" id="kontejner">
      {products.map((prod) => (
        <ProductCard product={prod} />
      ))}
    </div>
  );
}

export default Products;
