import React , { useState , useMemo } from "react";
import { useCounter } from "../hooks";


const heavyStuff = ( iterationNumber = 100 ) =>{ // creamos una funcion pesada
  for (let i = 0; i < iterationNumber; i++) {
    console.log(`Ahi vamos...`)
  }

  return `${ iterationNumber } iteraciones realizadas`
}


export const MemoHook = () => {

  const { counter, increment } = useCounter(4000); // desestructuramos la const donde se guarda el contador y la funcion
  const [ show , setShow ] = useState(true); // hacemos 1 estado

  const memorizedValue = useMemo (( ) => heavyStuff( counter ) , [counter])

  return (
    <div>
      <h1>
        Counter : <small>{counter} </small> {/* mostramos el contador */}
      </h1>
      <hr />

      <h4>{ memorizedValue }</h4> {/* hacemos que cada vez que se apriete el +1 uno se ejecute y si mostramos u ocultamos tambien */}
      
      <button className="btn btn-primary" onClick={() => increment()}> {/* se incrementa el contador */}
        +1
      </button>

      <button className="btn btn-outline-primary"  // al hacer click pasamos de verdero a falso
              onClick={() => setShow(!show)}> 
                Mostrar / Ocultar {JSON.stringify(show)} {/* mostramos el valor verdadero | falso */}
    </button>
    </div>
  );
};


/**
 * Para asegurarnos que cada cambio , no vuelva a disparar la funcion heavystuff usaremos useMemo
 * 
 *  hacemos una constante donde se guardara el valor memorizado
 * 
 * const memorizedValue = useMemo ()
 * 
 * recibe una funcion , que debe devolver algo
 * 
 * const memorizedValue = useMemo (( ) => heavyStuff( counter ) )
 * 
 * despues como segundo argumento , una depencia que solo se ejecuta si ese valor cambia
 * 
 * const memorizedValue = useMemo (( ) => heavyStuff( counter ) , [counter])
 * 
 * ahora vemos que solo se ejecuta la 1era vez que se renderiza , y cada vez que apretamos el boton +1
 * 
 * 
 */