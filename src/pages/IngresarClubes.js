import  clubes from "../assets/clubes.json";
import "../stylessheet/styles.css";
import Logo from '../assets/Logo.png'
export default function IngresarTarjeta(){
    var d=clubes.clubes;
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
            <h3>Todas las ventajas de tus clubes ahora tambien estan en CardHub. ¡Aprovechalos!</h3>
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
                        <button >siguiente</button>
                </div>
    </div>
    );
}