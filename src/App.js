import './App.css';
import './Style.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {

  const products = [
    { 
      id: 1, 
      naslov: "Cokoladna torta sa lesnicima",
      opis: "Američki klasik, jedna od najpoznatijih čokoladnih torti, izuzetno sočna, kremasta i ukusna", 
      kategorija: "torta",
      cena: 2000,
      slika: "https://i.pinimg.com/originals/4a/79/89/4a79890ab7cfcb18410dd019f2700568.jpg",
      kolicina: 0, 
    },
    { 
      id: 2, 
      naslov: "Lizalica",
      opis: "Lizalica sa ukusom voca", 
      kategorija: "bombona",
      cena: 250,
      slika: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/rainbow-candy-lolipop-shana-novak.jpg",
      kolicina: 0, 
    },
    { 
      id: 3, 
      naslov: "Gumene bombone gliste",
      opis: "Gumene bombone sa vocnom aromom", 
      kategorija: "bombona",
      cena: 300,
      slika: "http://images.kurir.rs/slika-620x419/gumene-bombone-foto-profimedia-1460386556-884283.jpg",
      kolicina: 0, 
    },
    { 
      id: 4, 
      naslov: "Cokoladna torta",
      opis: "Vrlo čokoladna, vrlo sočna i vrlo ukusna.", 
      kategorija: "torta",
      cena: 1000,
      slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      kolicina: 0, 
    },

    { 
      id: 5, 
      naslov: "Ljubicasti sladoled",
      opis: "Omiljena poslastica odraslih i dece u svim delovima sveta.", 
      kategorija: "sladoled",
      cena: 190,
      slika: "https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      kolicina: 0, 
    },
  ];

  
  return (
    <div>
      <Navbar />
      <Products products={products}/>
      <Footer />

    </div>
    
  );
}

export default App;
