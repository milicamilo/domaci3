import React from "react";
import ProductCard from "./ProductCard";

function Omiljeno({ products, removeFavourite }) {
  return (
    <>
      <div className="naslov-fav">
        <h2>Moji omiljeni slatkisi</h2>
        <div className="crta"></div>
      </div>
      <div className="container" id="kontejner">
        {products.map((prod) => (
          <ProductCard
            product={prod}
            key={prod.id}
            removeFavourite={removeFavourite}
            inFav={true}
          />
        ))}
      </div>
    </>
  );
}

export default Omiljeno;