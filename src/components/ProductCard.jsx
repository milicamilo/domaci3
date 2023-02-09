import React from "react";
import { FaTrashAlt, FaRegStar, FaStar } from "react-icons/fa";

function ProductCard({ product, addFavourite, removeFavourite, inFav }) {
  return (
    <div className="card">
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
            <button type="button" className="btn btn-custom tag-blue">
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
