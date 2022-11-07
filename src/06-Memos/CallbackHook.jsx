import React, { useState } from 'react'
import { useCallback , useEffect} from 'react'
import { ShowIncrement } from './ShowIncrement' // traemos el componente ShowIncrement

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10) // usamos el hook counter

    const increment = useCallback(
        (arg) => {
            // setCounter(counter + 1) // si aca dejamos el counter + 1 siempre se ejecutara una sola vez por que es memorizado en ShowIncrement con memo
            // para que deje de memorizar este valor , podemos llamar setCounter con un callback
            setCounter(( valor ) => valor + arg) ; // esto funciona por que internamente el estado sabe que tomara el valor actual del estado (valor) y le sumara 1
            // no se vuelve a dibujar por que la funcion fue memorizada
        },
        [],
    )
    
    useEffect(() => {
      //increment();
    
    }, [increment])
    
    return (
        <>
            <h1>useCallback Hook: {counter}</h1> {/* mostramos el contador */}
            <ShowIncrement increment={increment} /> {/* llamamos el componente con la funcion del hook */}
        </>
    )
}
/**
 * Podemos usar el hook useCallback , lo que hace es memorizar una funcion
 * 
 * tiene la sintaxis parecida a useEffect
 */

/**
 * Tambien se puede usar para que useEffect al apuntar a una funcion , no entre a un loop de renderizaciones sin parar
 * al apuntar a una funcion para que sea la dependencia , en realidad apuntaria a la memoria , este puede ser otro uso de 
 * useCallback
 */

/**
 * Para enviar argumentos los enviamos normalmente como si fuera una funcion anonima
 * 
 *     const increment = useCallback(
 *       (arg) => {
 *           setCounter(( valor ) => valor + arg) ;
 *        },
 *       [],
 *   )
 * 
 */