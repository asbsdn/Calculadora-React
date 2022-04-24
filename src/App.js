import React from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import Pantalla from "./componentes/Pantalla";
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Header from "./componentes/Header";

function App() {

  const [input, setInput] = useState('');/* Se usa el hook useState para modificar el estado del componente 
  pantalla, input es el valor defaul y setInput el valor que se va a ingresar */

  const agregarInput = valor => {
    setInput(input + valor);
    /* Se usan llaves para implementar la función, cuando solo retorna un valor se usa () */
  }

  const calcular = () => {
    if (input) { /* <-- Podemos escribir el condicional así, porque en programación existen los valores
    truthy y falsy, son valores que por sí solos son verdadores o falsos. Las cádenas de caracteres vacías
    son automaticamente falsas, y si no estan vacías son verdaderas. */
      setInput(evaluate(input)); /* 1. En este caso, si la cadena de caracteres tiene valores (valor verdadero) 
      se ejecutará está condición de evaluar lo que está en el input 
      2. evaluate hace parte de la libreria matematica math.js de JS y Node.js y lo que hace es realizar 
      operaciones matematicas al encontrar los símbolos de operaciones.*/
    } else {
      alert('Por favor ingresar valores') /* Si el input está vacío quiere decir que es falso entonces
      mostrará esta alerta indicando que se deben ingresar valores */
    }
  }

  return (
    <div className="App">
      <Header /> {/* Cargo el header como un componente, así lo puedo reutitilizar */}
      <div className="contenedorCalculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear> {/* 1. Defino la función 
          manejarClear como función anonima, ya que es sencilla y solo se ejecutará en esta parte del código.
          2. Defino aca la función que pondrá la pantalla en blanco cambiando el estado de setInput a una 
          cadena vacía. Y la enlazo en BotonClear.js donde programé el componente.
          3.Puedo usar etiqueta de cierre 
          para escribir la palabra clear con prop children, esto en caso de vaya a cambiar el valor de el 
          boton, sino puedo solo escribirlo en el div del componente boton sin usar prop children, como se 
          ve allá */}
        </div>
      </div>
    </div>
  );
}

export default App;
