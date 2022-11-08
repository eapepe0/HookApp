const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// estado inicial

const todoReducer = ( state = initialState , action = {}) =>{ // estado inicial  , en accion si no usamos una accion es un objeto vacion

    if (action.type === '[TODO] add todo'){ // si la accion enviada es [TODO add todo]
        return [ ...state , action.payload ]
    }

    return state;
}

let todos = todoReducer(); // llamamos al todoReducer

//console.log(todos)

/* todos.push({
    id: 2,
    todo: 'Recolectar la piedra del Tiempo',
    done: false,
}) */  
// esto funciona en practica pero no mostraria nada en pantalla
// no se puede mutar un estado

// console.log(todos)
// 

//cuando queremos modificar el estado mandamos una accion 

const newTodo ={ // creamos un
        id: 2,
        todo: 'Recolectar la piedra del Tiempo',
        done: false,
    }

const addTodoAction ={
    type : '[TODO] add todo',
    payload : newTodo,
}
todos = todoReducer(todos , addTodoAction )

//console.log({state : todos})