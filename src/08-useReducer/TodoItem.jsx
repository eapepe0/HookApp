export const TodoItem = ({ todo, onDeleteTodo  , onToogleTodo } ) => {
    return (<>
        <li key={ todo.id } className="list-group-item d-flex justify-content-between"> 
            <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through':''} `}
               onClick={()=>onToogleTodo(todo.id)}>
                { todo.description }
            </span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
                                    {/* como aca se envia el argumento a la funcion usamos una funcion arrow  */}
        </li>
        </>
    )
}


/**
 * <span className={`align-self-center ${todo.done && 'text-decoration-line-through'} `}
 * Si lo usamos de esta manera al ser falso en el DOM crea algo como <span class="align-self-center false"
 * para evitar que cree una clase false, usar un ternario
 */

/**
 * ${} creamos una expresion de JS
 * (todo.done) si todo.done es verdadero ponemos la clase
 * : (de lo contrario)
 * ninguna clase
 */