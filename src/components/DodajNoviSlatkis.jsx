import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function DodajNoviSlatkis({ handleDodaj, duzinaNiza }) {
  const [userData, setUserData] = useState({
    id: duzinaNiza + 1,
    naslov: "",
    opis: "",
    kategorija: "",
    slika: "",
    favorite: false,
  });

  function handleInput(e) {
    let noviSlatkis = userData;
    noviSlatkis[e.target.name] = e.target.value;

    setUserData(noviSlatkis);
  }

  return (
    <div className="page-wrapper bg-gra-01 p-t-30 p-b-30">
      <div className="cont-black">
        <h2 className="title">DODAJ NOVi SLATKIS</h2>

        <form id="novaKartica">
          <div className="grupa">
            <label htmlFor="naslov" className="lbl">
              Naslov
            </label>
            <input
              type="text"
              name="naslov"
              id="naslov"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>
          <div className="grupa">
            <label htmlFor="opis" className="lbl">
              Opis
            </label>
            <input
              type="text"
              name="opis"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>
          <div className="grupa">
            <label htmlFor="kategorija" className="lbl">
              Kategorija
            </label>
            <input
              type="text"
              name="kategorija"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>
         
          <div className="grupa">
            <label htmlFor="slika" className="lbl">
              Slika
            </label>
            <input
              type="text"
              name="slika"
              className="input--style-3 inpt-2"
              placeholder=""
              required
              onInput={handleInput}
            />
          </div>

          <div className="p-t-20 grupa">
            <Link to="/">
              <input
                className="btn btn-inpt purple"
                // type="submit"
                value="Potvrdi"
                readOnly
                onClick={() => {
                  handleDodaj(userData);
                }}
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DodajNoviSlatkis;