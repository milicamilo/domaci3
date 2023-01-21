import React from "react";

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

        <button type="button" className="btn btn-custom">
          Uredi
        </button>
        <button type="button" className="btn btn-custom">
          Obriši
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
