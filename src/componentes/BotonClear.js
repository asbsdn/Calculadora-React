import React from "react";
import '../stylesheets/BotonClear.css'

const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.manejarClear}> {/* Agrego el addEventListener onClick y le 
    paso la función manejarClear para que se ejecute al hacer click. En este caso la función manejarClear 
    al ser sencilla la definí como una función anonima en el componente botonClear que está en App.js */}

        {props.children} {/* Acá puedo escribir solo CLEAR y no usar children en caso que el valor no vaya 
        a cambiar y sea el mismo siempre, como en este caso que es un botón componentesolo para clear */}
    </div>
    /* const BotonClear = () => (
    <div className="boton-clear" >
        Clear
    </div> <-- Así quedaría sin usar props*/
);

export default BotonClear;