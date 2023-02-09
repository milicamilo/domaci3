import React from "react";
import ProductCard from "./ProductCard";

function Products({ products, addFavourite}) {
  return (
    <div className="container" id="kontejner">
      {products.map((prod) => (
        <ProductCard product={prod} 
        key = {prod.id}
        addFavourite = {addFavourite}
        />
      ))}
    </div>
  );
}

export default Products;
