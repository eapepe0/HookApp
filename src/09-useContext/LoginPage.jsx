import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';



export const LoginPage = () => {
    const {user , setUser} = useContext(UserContext); // sacamos el user y el setUser de useContext que a su vez usa el contexto que nos da userContext
    return (
        <>
            <h1 className='text-center'>LoginPage</h1>
            <hr />

            <h3> Bienvenido nuevamente : {user?.name}</h3>
            <br />
            <h4>Tu direccion de mail registrada : <code>{user?.mail}</code></h4>
            <br />
            <pre aria-label='pre'>
                {JSON.stringify(user, null , 3)}
            </pre>
            {/* Con esta funcion le damos un valor a user que en el mismo componente se puede ver */}
            <button className="btn btn-primary" onClick={() => setUser({id: 123, name: "jj" , mail: 'eapepe0@gmail.com'})}> 
                Establecer Usuario
            </button>
            
        </>
    )
}
