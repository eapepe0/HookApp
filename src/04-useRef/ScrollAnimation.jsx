import React , {useRef , useState , useEffect} from 'react'

export const ScrollAnimation = () => {
    const [background, setBackground] = useState("grey") // cuando se carga el fondo es gris
    const divRef = useRef(); // referencia en el div

    useEffect(() => { // se ejecuta una vez cuando se carga la app

      const handleScroll = ( ) => { // maneja el scroll

        const div = divRef.current // referencia del div
        const { y } = div.getBoundingClientRect() // coordenadas del div en pantalla
 
        const background = y <= 0 ? 'orange' : 'pink' ; // si y es menor o igual a 0 es naranja de lo contrario rosa
        setBackground(background) // pasamos el background al estado
      
      }

      window.addEventListener("scroll", handleScroll) // evento scroll
      
      return () => { // limpia 
        window.removeEventListener("scroll",handleScroll) // limpiamos el evento 
      }
    }, [])
    


  return (
    <>  
    <div style = {{ height : "180vh" , backgroundColor : background }} ref={divRef}>
        <h1>Scroll Animation</h1>
        <h1>Scroll to change the background color</h1>
    </div>
    </>
  )
}
