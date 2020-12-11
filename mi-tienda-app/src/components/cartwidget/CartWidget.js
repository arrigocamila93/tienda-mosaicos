import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./CartWidget.css"


function Icono() {
    return (
        
        <FontAwesomeIcon icon={faShoppingCart} className="icono" />
        
    );
}
export default Icono;
