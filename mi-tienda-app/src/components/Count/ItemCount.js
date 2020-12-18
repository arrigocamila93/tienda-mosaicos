import React from 'react';

export default function ItemCount({count, setCount}) {
    return (
        <>
        <button
            onClick={ () => setCount(count + 1)}
        >+</button>
        <p>{count}
        </p>
        <button
            onClick={ () => setCount(count - 1)}
        >-</button>
        </>
    );
};


/*const ItemCount = ({contador,setContador,id,stock}) => {

    const restarProducto = () => {
        if(contador>0) {
            setContador(contador - 1);
        }
    }

     function sumarProducto(){
        if(contador<stock) {
        setContador(contador+1)
        }
    }
    function restarProducto(){
        if(contador>0) {
        setContador(contador-1)
        }
    }
    console.log({contador,id});

    return (
        <div className="container">
            <button 
            disabled={contador===1 ? 'disabled' : null } 
            className="btn color-primario text-white Bellota-text-bold boton-contador resta"  
            onClick={ () => restarProducto()}>-</button>
            <input type="number" className="btn btn-light" value={contador} />
            <button className="btn color-primario text-white boton-contador" onClick={ () => setContador(contador+1)}>+</button>
        
        </div>
      );
} */
 
