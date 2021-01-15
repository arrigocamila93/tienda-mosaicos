import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import fondo from '../../img/fondo.jpg'
import fondo2 from '../../img/fondo2.jpg'
import fondo3 from '../../img/fondo3.jpg'
import './slider.css'

class Slider extends React.Component {

    

    render() {
        
        return (
            <div>
                
                    <Carousel>
                        <Carousel.Item className="slider pb-4">
                            <img className="d-block w-100" src={fondo} alt="First slide"/>
                            {/* <Carousel.Caption>
                                <div className="Presentacion">
                                <h3 class="Presentacion">Hola, Soy {nombre}</h3>
                                <p className="text-cyan">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className="slider">
                            <img className="d-block w-100" src={fondo2} alt="Third slide"/>
                            {/* <Carousel.Caption>
                                <div className="Presentacion">
                                <h3 class="Presentacion">Hola, Soy {nombre}</h3>
                                <p className="text-cyan">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className="slider">
                            <img className="d-block w-100" src={fondo3} alt="Third slide"/>
                            {/* <Carousel.Caption>
                                <div className="Presentacion">
                                <h3 >Hola, Soy {nombre}</h3>
                                <p className="text-cyan">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    
                    
            </div>
        )
    }
}
export default Slider;

