import './App.css';
import React, { useState } from 'react';
import Navbar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./containers/ItemListCointainer/ItemListContainer";
import ProductCard from "./components/ProductCard/ProductCard";
import ItemCount from "./components/Count/ItemCount";



export default function App() {
  const [count, setCount] = useState(0);
  const qty = 7;

  const add = () => {
    if (count < qty) {
      setCount(count + 1);
    }
    if (count === qty) {
      alert("Sin más stock, disculpe");
    }
  };

  const less = () => {
    if (count === 0) {
      alert("0 es el mínimo");
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="App">

      <header className="App-header">

        <Navbar />

      </header>

      <section className="container home">
        <ItemListContainer greeting={"Bienvenidos!"} />
      </section>

      <>
        <ProductCard titulo="Producto 1" precio="$450" />
        <ProductCard titulo="Producto 2" precio="$450" />
        <ProductCard titulo="Producto 3" precio="$450" />
        <ProductCard titulo="Producto 4" precio="$450" />
      </>

      <>
        <ItemCount count={count} add={add} less={less} /> 
      </>



    </div>
  );
}

