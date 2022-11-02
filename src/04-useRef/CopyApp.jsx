import React , {useState , useRef} from 'react'

export const CopyApp = () => {

    const [text, setText] = useState("Hola!"); // donde se guarda el valor del texto
    const [isCopied, setIsCopied] = useState(false); // se copio??
    const inputRef = useRef(); // hacemos ref apunta al input


    const handleCopy = () =>{ // funcion al hacer click
        const input = inputRef.current;  // el input
        input.select(); // seleccionamos el input , mejor dicho el texto ingresado

        document.execCommand('copy') // copiamos al portapapeles
        setIsCopied(true); // pasamos del false al true
        console.log(`log : ${isCopied} , in line : 16`)

        setTimeout(()=> setIsCopied(false),2000) // esperamos 2seg y lo pasamos a falso
        console.log(`log : ${isCopied} , in line : 19`)
    }
  return (
    <>
        <h1>CopyApp</h1>

        <input type="text" 
            value = {text} // valor del texto
            onChange={( e ) => setText(e.target.value)} // cuando cambia lo ingresado se pone en text
            ref = {inputRef} //ref
            /> 


        <button onClick={handleCopy} // al hacer click disparamos la funcion
            >Copy</button>

        { isCopied && // si es verdadero mostramos esto (se muestra por 2 segundos)
        <div className="alert alert-success d-flex align-items-center mt-4" role="alert">
            <div>
                Copiado!!!
            </div>
        </div>
        }
    </>
  )
}
