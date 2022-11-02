import React from "react";

export const RenderApp = () => {
    const [text, setText] = useState(""); // guardamos el texto

    const renderRef = useRef(1); // creamos una referencia con el valor 1
    // #1 render 1 renderRef = 1
    // #2 render 2 renderRef = 2
  
    useEffect(() => {
      // renderizado vale 1
      renderRef.current++; // le sumamos uno con cada renderizado
      // la variable renderRef no se borra en cada renderizacion
      // y se puede modificar
  
      // #1 render1 renderRef++ = 2
      // #2 render2 renderRef++ = 3
    });
  
  return (
    <div>
      <h1>App</h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <br />
      <h1> Renders : {renderRef.current}</h1> {/* mostramos el render */}
    </div>
  );
};


/**
 * en la primera parte vimos el uso que le podemos dar al dom
 * en esta parte veremos como usarlo para una referencia mutable
 * cuando trabajamos con React tenemos 2 tipos de variables ,
 * que son resistentes a la renderizacion ,
 * los estados , que cuando cambian disparan una nueva renderizacion
 * el otro son las referencias mutables , es persistente , pero la podemos mutar
 * es decir podemos actualizar su valor sin usar una funcion de actualizacion,
 * y al cambiar no genera una nueva renderizacion
*/