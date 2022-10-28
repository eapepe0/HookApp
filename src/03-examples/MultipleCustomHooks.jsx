import { useCounter , useFetch } from "../hooks";
import { Card } from "./Card";
import {Loading} from './Loading';


export const MultipleCustomHooks = () => {

    const { counter ,increment } =  useCounter(20)
    const { data , isLoading , hasError } = useFetch (`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    console.log(`log : ${JSON.stringify(data)} , in line : 10`)
    // llamamos la api , desestructuramos 
    const { author , quote , id } = (!!data   && data.length > 0) && data[0];

    console.log(`log : ${id} , in line : 14`)
    // desestructuramos si doble negacion de undefined es true
    // unos segundos antes de que responda el api , data devuelve null , en el hook se inicializa como null
    //  no podemos desestructurar algo que sea null en nuestro caso author y quote cuando data sea null
    // pero si podemos desestructurar algo que sea false , si le hacemos doble negacion convertimos el null a false
    // y no tira error
    console.log(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            isLoading  /* si es verdadero muestra el cargar */
            ? ( 
                <Loading />
            ) 
            :  /* de lo contrario dejo de cargar */
            <Card author={author} quote = {quote} id={id} onFunction= {increment}/>
        }       
    </>
  )
}
