import React from 'react'
import {useCounter} from '../hooks/useCounter'

export const CounterWithCustomHook = () => {


const {counter, increment , decrement , reset} = useCounter();



  return (
    <div className='container-fluid'>
        <h1>Counter With Hook : {counter}</h1>
        <hr />

        <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
        <button className="btn btn-primary"onClick={reset}>Reset</button>
        <button className="btn btn-primary"onClick={()=>decrement()}>-1</button>

    </div>
  )
}

/**
 * llamamos al hook useCounter que devuelve un objeto {}
 * desestructuramos el valor counter {} 
 * la funcion increment , la funcion decrement y la funcion reset
 */

/**
 * en el evento onClick y al recibir un valor la funcion increment tenemos que llamar un callback
 * la funcion no necesita el callback por que no recibe valor
 */

/**
 * En la funcion decrement como el valor por defecto en la funcion useCounter es 1
 * llamamos el callback pero sin un valor definido
 */

/**
 * en el caso de que la funciones increment o decrement se llame sin callback
 * se estaria enviando el event a la funcion lo cual daria error objectObject
 */