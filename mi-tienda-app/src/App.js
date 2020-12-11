import './App.css';
import React from 'react';
import Navbar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./containers/ItemListCointainer/ItemListContainer";

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Navbar />

      </header>

      <section className="container home">
        <ItemListContainer greeting={"Bienvenidos!"} />
      </section>

    </div>
  );
}

export default App;