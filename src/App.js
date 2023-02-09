import './App.css';
import './Style.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Omiljeno from './components/Omiljeno';
import DodajNoviSlatkis from './components/DodajNoviSlatkis';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [fav, setFav] = useState([]);

  const [products, setProducts] = useState([
    { 
      id: 1, 
      naslov: "Cokoladna torta sa lesnicima",
      opis: "Američki klasik, jedna od najpoznatijih čokoladnih torti, izuzetno sočna, kremasta i ukusna.", 
      kategorija: "torta",
      slika: "https://i.pinimg.com/originals/4a/79/89/4a79890ab7cfcb18410dd019f2700568.jpg",
      favourite: false, 
    },
    { 
      id: 2, 
      naslov: "Lizalica",
      opis: "Lizalica sa ukusom voca.", 
      kategorija: "bombona",
      slika: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/rainbow-candy-lolipop-shana-novak.jpg",
      favourite: false, 
    },
    { 
      id: 3, 
      naslov: "Gumene bombone gliste",
      opis: "Gumene bombone sa vocnom aromom.", 
      kategorija: "bombona",
      slika: "http://images.kurir.rs/slika-620x419/gumene-bombone-foto-profimedia-1460386556-884283.jpg",
      favourite: false, 
    },
    { 
      id: 4, 
      naslov: "Cokoladna torta",
      opis: "Vrlo čokoladna, vrlo sočna i vrlo ukusna.", 
      kategorija: "torta",
      slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      favourite: false, 
    },

    { 
      id: 5, 
      naslov: "Ljubicasti sladoled",
      opis: "Omiljena poslastica odraslih i dece u svim delovima sveta.", 
      kategorija: "sladoled",
      slika: "https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      favourite: false, 
    },
  ]);

  function addFavourite(id) {
    products.forEach((i) => {
      if (i.id === id) {
        i.favourite = true;
        //console.log("favorite" + id);
      }
    });
    refreshFav();
  }

  function removeFavourite(id) {
    products.forEach((i) => {
      if (i.id === id) {
        i.favourite = false;
        //console.log("nijee favorite " + id);
      }
    });
    refreshFav();
  }

  function refreshFav() {
    let favProduct = products.filter((product) => product.favourite == true);
    setFav(favProduct);
  }
  
  let duzinaNiza = products.length;

  function handleDodaj(userData) {
    let noviProduct = products;
    noviProduct[noviProduct.length] = userData;
    setProducts(noviProduct);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Products products={products} addFavourite = {addFavourite}/>}
        />
         <Route
          path="/omiljeno"
          element={<Omiljeno products={fav} removeFavourite = {removeFavourite}/>}
        /> 
         <Route
          path="/novislatkis"
          element={
            <DodajNoviSlatkis
              handleDodaj={handleDodaj}
              duzinaNiza={duzinaNiza}
            />
          }
        /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
