import React from 'react';
import holograma from '../../img/holograma.png'
import cursos from '../../img/holograma2.png'
import asesor from '../../img/holograma3.png'
import deco from '../../img/holograma1.png'

import './ologramas.css'


const Olograma = ({titulito})=> {
    return (
        <div>
            <h1 className="text-center text-cyan">{titulito}</h1>
            <main className="container-fluid center">
                <div className=" row ologramitas">
                    <div className="col-xl-4 col-lg-12 col-md-12 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={cursos} alt="cursos"></img>
                            <img className="olograma" src={holograma} alt ="holograma"></img>
                            <h5 className="text-cyan">Cursos Online</h5>
                            <p className="text-cyan parrafito">Contamos con cursos online para capacitarte en lo que desees con todo lo que tenemos para brindarte en nuestra tienda.</p>               
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={asesor} alt="webpage"></img>
                            <img className="olograma" src={holograma} alt ="holograma"></img>
                            <h5 className="text-cyan">Asesoramiento permamente</h5>
                            <p className="text-cyan">En todos los cursos contás con asesoramiento en todo lo que necesites.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={deco} alt="decoracion"></img>
                            <img className="olograma" src={holograma} alt ="holograma"></img>
                            <h5 className="text-cyan">Tips de Decoracion</h5>
                            <p className="text-cyan">Te mostramos distintas ideas para inspirarte y poder decorar tu espacio como siempre quisiste.</p>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}
export default Olograma;