import React from 'react'

import { useRef } from 'react';
export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = ()=>{
        inputRef.current.select();
    }
  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={inputRef}
            type="text" 
            placeholder='Ingrese su nombre' 
            className='form-control'
        />

        <button 
                className='btn btn-primary mt-2'
                onClick={onClick}
        >
            Set focus
        </button>
    </>   
  )
}


/*
 Es un hook que nos sirve para manejar un valor de variable que se puede cambiar 
o trabajar con ella , pero que no dispara la re-renderizacion 
Es como un useState que no dispara la re-renderizacion

En pocas palabras, el useRef te permite mantener un valor y cambiarlo sin que dispare una nueva renderización cuando lo cambias... 

*/