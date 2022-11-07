import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});


/**
 * usamos el memo para que mientras el property no se cambie , se memorice el componente
 */