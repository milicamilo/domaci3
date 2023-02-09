import React from "react";
import { FaTrashAlt, FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ product, addFavourite, removeFavourite, inFav }) {
  
  const [hide, setHide] = useState(false);
  
  return (
    <div className={hide == false ? "card" : "hide"}>
      <div className="card-header">
        <img src={product.slika} alt="logo"></img>
      </div>
      <div className="card-body">
        <div className="tag tag-teal category">{product.kategorija}</div>
        <br />
        <h4 className="naslov">{product.naslov}</h4>
        <p className="opis">{product.opis}</p>
        <p className="cena">
          <strong>{product.cena}</strong>
        </p>

        <div>
          { !inFav ? (
            <>
            <button type="button" className="btn btn-custom tag-pink" onClick={() => addFavourite(product.id)}>
              {product.favourite ? <FaStar /> : <FaRegStar />}
            </button>
            <button type="button" className="btn btn-custom tag-blue" onClick={() => {setHide(true);}}>
              <FaTrashAlt />
            </button>
            </>
          ) : (<button type="button" className="btn btn-custom tag-pink" onClick={() => removeFavourite(product.id)}>
              <FaTrashAlt />
          </button>)}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
