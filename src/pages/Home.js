import React from 'react';
import "../stylessheet/styles.css";
import datajson from "../assets/intereses.json";

var data = datajson.intereses;
const ImageCarousel = () => {
    const data = datajson.intereses;
    return (
        <div className="carousel">
            {data.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt={item.nombre}/>
                    <h3>{item.nombre}</h3>
                </div>
            ))}
        </div>
    );
}

export default ImageCarousel;
