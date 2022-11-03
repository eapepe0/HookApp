import { useLayoutEffect , useRef , useState } from "react";
import { useFetch } from "../hooks/useFetch"



export const Card = ({author , quote , onFunction}) => {
    const { data , isLoading , hasError } = useFetch(`https://www.breakingbadapi.com/api/characters?name=${author}`)
    // hace una llamada por personajes
    const { img } = (!!data   && data.length > 0) && data[0]; // extrae la imagen del personaje

    const pRef = useRef(); // creamos una referencia 
    const [boxSize , setBoxSize] = useState({width : 0, height : 0}) // creamos un objeto con un tamaño

    useLayoutEffect(() =>{
        const { width , height } = pRef.current.getBoundingClientRect(); // sacamos la dimension de nuestro contenedor
        setBoxSize({height , width}) // ponemos esos valores en el estado
    },[quote]) // corre cada vez que hay un cambio en quote

  return (
    <>
    <div className="container">
        <div className="card centro">
            <img className="imagen_card" src={img}  alt="..."/> /{/* muestra imagen */}
            <div className="card-body">
            <blockquote className="blockquote text-center" style={{display : 'flex'}}>
                    <p className="mb-2 fs-2" ref = {pRef}>
                        {quote} {/* muestra la frase */}
                    </p>
                    <footer className="blockquote-footer fs-5 mt-2">
                        {author} {/* muestra el autor */}
                    </footer>
                </blockquote>
                <div className="centro">
                    <code>{JSON.stringify(boxSize)}</code>
                    <button className="btn btn-primary mt-3" onClick={()=>onFunction()} >Next Quote</button> 
                    {/* se crea la funcion de incrementar que se llama desde el padre */}
                </div>
            </div>
        </div>
    </div>
</>
  )
}
