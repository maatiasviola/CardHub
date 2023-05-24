import "../stylessheet/styles.css";
import React, { useState, useEffect } from "react";
import datajson from "../assets/intereses.json";
import IngresarTarjetas from './IngresarTarjeta';
import ReactDOM from 'react-dom';
import Logo from '../assets/Logo.png'
import Lupa from '../assets/Lupa.png'
import TresPuntos from '../assets/TresPuntos.png'
export default function Intereses(){
    const [redirigir, setRedirigir] = useState(false);
    useEffect(() => {
        if (redirigir) {
          ReactDOM.render(<IngresarTarjetas/>, document.getElementById('root'));
        }
      }, [redirigir]);
      const manejarClick = () => {
        setRedirigir(true);
      };
    var data=datajson.intereses;

        return(
            <div>
                <div id="menu">
                    <img src={Logo} />
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">mapa</a></li>
                        <li><a href="#">mi interes</a></li>
                    </ul>
                    <div className="navSearchBar">
                        
                        <img className = "tresPuntos" src={TresPuntos}  />
                        <input className = "busquedaNav" placeholder="Ingrese su busqueda" />
                        <img className = "lupa" src={Lupa} />
                        
                    </div>
                    <div className="navPerfil">
                        
                    </div>
                </div>
                <div id="barra">
                    <h3>Queremos conocerte! Contanos tus intereses que te gustaria aprovechar al maximo</h3>
                    <input id="busqueda" placeholder="Busca tu interes" />
                </div>
                <div className="tarjetaInteres">
                    {data.map(e => {
                    return(
                        <div className="tarjetaBanco">
                            <div className="agregado">
                            </div>
                            <img src={e.img}/>    
                            <h3>{e.nombre}</h3>
                            <button>+agregar</button>
                        </div>          
                    ); 
                    })
                    }
                </div>
                <div className="botonSiguiente">
                        <button onClick={manejarClick} >siguiente</button>
                </div>
            </div>

        );
}