import React from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";

function Products({ products, addFavourite}) {
  
  const [sortiranje, setSortiranje] = useState("none");

  function handleSort(e) {
    setSortiranje(e.target.value);
  }
  
  return (
    <>
      <div className="sortiranje">
        <label htmlFor="cena">Sortiranje: </label>
        <select name="cena" id="cena" className="sort" onChange={handleSort}>
          <option value="none">Podrazumevano</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>

      <div className="container" id="kontejner">
        {sortiranje == "asc"
          ? products
              .sort((a, b) => (a.naslov < b.naslov ? -1 : 1))
              .map((prod) => (
                <ProductCard product={prod} 
                key = {prod.id}
                addFavourite = {addFavourite}
                inFav = {false}
                />
              ))
          : sortiranje == "desc"
          ? products
              .sort((a, b) => (a.naslov < b.naslov ? 1 : -1))
              .map((prod) => (
                <ProductCard product={prod} 
                key = {prod.id}
                addFavourite = {addFavourite}
                inFav = {false}
                />
              ))
          : products.map((prod) => (
            <ProductCard product={prod} 
            key = {prod.id}
            addFavourite = {addFavourite}
            inFav = {false}
            />
          ))}
      </div>
    </>



  );
}

export default Products;
