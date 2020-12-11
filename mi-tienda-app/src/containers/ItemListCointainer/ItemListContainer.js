// Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo
  import React from "react";
import "./ItemListContainer.css"
  
  const ItemListContainer = ({ greeting }) => {
    return <h1 className="title">{greeting}</h1>;
  };
  
  export default ItemListContainer;