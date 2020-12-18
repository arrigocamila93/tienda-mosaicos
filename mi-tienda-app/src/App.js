import './App.css';
import React, { useState } from 'react';
import Navbar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./containers/ItemListCointainer/ItemListContainer";
import ProductCard from "./components/ProductCard/ProductCard";
import ItemCount from "./components/Count/ItemCount";



function App() {
  const [count, setCount] = useState(0);
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
      <ItemCount 
        count= {count}
        setCount={setCount}
      />
      </>



    </div>
  );
}

export default App;