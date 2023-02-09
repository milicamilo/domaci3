import React from "react";
import { ImPencil } from "react-icons/im";
import { IoTrashSharp } from "react-icons/io5";
import { HiPlus, HiTrash } from "react-icons/hi";

function ProductCard({ product }) {
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
          <button type="button" className="btn btn-custom tag-pink">
            <HiPlus />
          </button>
          <button type="button" className="btn btn-custom tag-lavanda">
            <ImPencil />
          </button>
          <button type="button" className="btn btn-custom tag-blue">
            <HiTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
