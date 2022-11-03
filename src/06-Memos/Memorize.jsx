import React , {useState} from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";
export const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [ show , setShow ] = useState(true);

  return (
    <div>
      <h1>
        Counter : <Small value={counter} /> {/*  */}
      </h1>
      <button className="btn btn-primary" onClick={() => increment()}> {/* se incrementa el contador */}
        +1
      </button>

      <button className="btn btn-outline-primary"  // al hacer click pasamos de verdero a falso
              onClick={() => setShow(!show)}> 
                Mostrar / Ocultar {JSON.stringify(show)} {/* mostramos el valor verdadero | falso */}
    </button>
    </div>
  );
};
