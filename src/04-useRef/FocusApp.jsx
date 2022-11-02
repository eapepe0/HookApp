import React from 'react'
import { useState , useRef } from 'react'

export const FocusApp = () => {
    const [text, setText] = useState("")
    const inputRef = useRef();

    const handleFocus = ( ) =>{

        const input = inputRef.current
        // input.value = "Valor mutado"; 
        // si hacemos un cambio de esta manera estariamos cambiando el valor desde el DOM
        // pero si vemos el estado text vemos que sigue lo que colocamos
        // esto hace que maneje el dom en lugar que lo haga React, esto puede ser peligroso
        // nos puede dar muchos errores

        // un uso correcto seria usar el focus  como esto no esta modificando nada que tenga que ver con 
        // los estados , 

        input.focus();
    }
  return (
  <>
    <h1>App</h1>
    <div className="input-group mt-4">
        <input type="text" 
        value = {text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
        className = 'form-control'
        />

        <button onClick={handleFocus} className="btn btn-success">Focus</button>
    </div>
 </>
  )
}
