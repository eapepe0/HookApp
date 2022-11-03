import React , { memo } from 'react'

export const Small = memo (({value}) => {
    console.log('Me volvi a dibujar T.T')
  return (
    <small>{value}</small>
  )
})

/* es recomendado memorizar componentes solo cuando son pesados */
/**
 * Al rodear con memo le decimos a React que solamente se renderize cuando haya un cambio de property
 * 
 * Si hacemos click en +1 , vemos que  se renderiza por que se cambia el value
 * 
 * Pero si hacemos click en Mostrar / Ocultar vemos que no se vuelve a ejecutar
 */