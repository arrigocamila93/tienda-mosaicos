import React  from 'react';
import NavBar from "./componentes/navbar/Navbar";
import Slider from './componentes/slider/Slider';
import './App.css'
import Footer from './componentes/footer/Footer'
import Olograma from './componentes/ologramas/Ologramas'
import "./App.css"
import ItemListContainer from './containers/Itemlistcontainer/ItemsListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartContainer from './containers/CartContainer/CartContainer';



 const App = ()=> {

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path={`/`}>
              <Slider />
              <Olograma />
              {/* <div className="container text-center ">
                <button className="centrar" onClick={cambiarTitulo}>Cambiar Titulo</button>
              </div> */}
              <ItemListContainer />
            </Route> 
            <Route exact path={`/detail/:id`}>
              <ItemDetailContainer/>
            </Route>
            <Route exact path={`/cart`}>
              <CartContainer/>
            </Route>
          </Switch>
          <Footer 
          titulo="Viví creando"
          subtitulo="Dale color a tu mundo"/>
      </BrowserRouter>
    </CartProvider>
  )
 }
export default App;