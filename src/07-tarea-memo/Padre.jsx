import React from "react";
import { Hijo } from "./Hijo";
import { useState, useCallback } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10, 20];
  const [valor, setValor] = useState(0);

  /* const incrementar = ( num ) => {
        setValor( valor + num )
    }
 */
  const incrementar = useCallback((num) => { // aca usamos el useCallback 
    setValor((prevValue) =>  prevValue + num); // en el set usamos un callback con el valor previo y le sumamos el numero
    // setValor(valor + num )  si lo dejamos
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
