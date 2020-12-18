import React from 'react';
import Button from 'react-bootstrap/Button'




const ProductCard = (props) => {
    return (
        <article>
            <img src="https://placehold.it/100x100" alt="Producto 1" />
            <h3>{props.titulo}</h3>
            <p>{props.precio}</p>
            <Button variant="secondary">Comprar</Button>{' '}
        </article>
    )
}

export default ProductCard;