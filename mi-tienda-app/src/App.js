
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/NavBar.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        
        <Navbar />
        
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;