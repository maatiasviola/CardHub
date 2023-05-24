import  bancos from "../assets/bancos.json";
import "../stylessheet/styles.css";
import Logo from '../assets/Logo.png'
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import IngresarClubes from './IngresarClubes';
export default function IngresarTarjeta(){
    const [redirigir, setRedirigir] = useState(false);
    useEffect(() => {
        if (redirigir) {
          ReactDOM.render(<IngresarClubes/>, document.getElementById('root'));
        }
      }, [redirigir]);
      const manejarClick = () => {
        setRedirigir(true);
      };

    var d=bancos.tarjetas;
    console.log(d);
    return(
    <div>
        <div id="menu">
            <img src={Logo} />
            <ul>
               <li><a href="#">Inicio</a></li>
                <li><a href="#">mapa</a></li>
                <li><a href="#">mi interes</a></li>
            </ul>
        </div>
        <div id="barra">
            <h3>Queremos conocerte! Contanos tus intereses que te gustaria aporvechar al maximo</h3>
            <input id="busqueda" placeholder="Busca tu interes" />
        </div>
        <div className="tarjetaInteres">
            {(d != null)?d.map(e=>{
                return(
                    <div className="tarjetaBanco" >
                        <div className="agregado">
                        </div>
                        <img src={e.imagen}/>
                        <h3>{e.nombre}</h3>
                        <button>+agregar</button>
                    </div>
                );
            }):""}
        </div>
        <div className="botonSiguiente">
                        <button onClick={manejarClick}>siguiente</button>
                </div>
    </div>
    );
}