import React , { memo } from 'react'

export const ShowIncrement = memo (({increment}) => {
    console.log("Me volvi a ejecutar");
  return (
    <><button className='btn btn-primary' onClick={ () => {
        //increment();
        increment(5)
    }}>Incrementar</button></>
  )
})

/**
 * Por que al usar memo se sigue ejecutando la linea 4 (me volvi a ejecutar) , si nada cambio en pantalla?
 * 
 * esto se puede explicar por que nosotros al enviar una funcion como property no le estamos enviando en si una funcion
 * 
 * sino una direccion de memoria , y cada vez que se renderize cambia , 
 */

/**
 * Que pasa si en increment queremos llamarlo con un argumento
 * 
 * lo llamamos increment (5 )
 */