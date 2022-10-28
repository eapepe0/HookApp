import React from 'react'
import { useEffect , useState } from 'react'

export const Message = () => {
    const [coords , setCoords] = useState ({x : 0 , y : 0})

    useEffect(() => {
        const onMouseMove = ({ x , y }) =>{ // recibe coordenadas
            setCoords({ x , y }) // las escribe en la const state
        }
      window.addEventListener('mousemove',onMouseMove) // creamos un evento y le pasamos una funcion
    
      return () => { // aca limpiamos cuando se termina de ejecutar el useEffect
        window.removeEventListener('mousemove', onMouseMove) // removemos el listener
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
/**
 * hacemos un useEffect que cuando se active el componente Message (cuando el nombre de usuario es strider2)
 * se genere un event listener (escucha lo que hace el mouse en este caso) , le pasamos una funcion
 * llamada onMouseMove , que recibe un objeto con cordenadas , se desestructuran a partir del event 
 * 
 * una vez que se borra el nombre de usuario, si no tenemos ninguna funcion en el return, quedaria
 * funcionando todo el tiempo el event listener , para eso usamos una funcion de limpieza
 * 
 * removemos el event listener
 * 
 * esto se hace por que cada vez que borremos el usuario, si no tenemos una funcion de limpieza, y lo volvemos
 * a escribir se estaria generando cada vez mas event listener , esto generaria mas consumo de memoria para
 * nuestra app
 * 
 * este ejemplo se podria dar tambien para alguna funcion pesada como por ejemplo alguna llamada a alguna Api o
 * busqueda en alguna base de datos
 */