import React, { useReducer, useState , useEffect} from 'react';
import { todoReducer } from './TodoReducer';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [   // estado inicial
    {
        id: new Date().getTime(),
        description: 'Recolectar la pieda del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la pieda del Tiempo',
        done: false,
    },
];

const init = () =>{ // inicializamos el reducer
    return JSON.parse(localStorage.getItem('todos')) || []; // parsea y saca los items del storage con esos datos inicializa el reducer
}
export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState , init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]) // cuando cambia el todos , se agrega alguno eso que se agrega va al localStorage
    

    const handleNewTodo = (todo) => {  // funcion que manda la accion de agregar al reducer

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = ( id ) =>{ // funcion que manda el borrar al reducer
        const action = {
            type : '[TODO] Remove Todo',
            payload : id
        }
        dispatch(action)
    }

    const handleToogleTodo = (id) =>{
        const action = {
            type : '[TODO] Toogle Todo',
            payload : id,
        }
        dispatch(action)
    }
    return (
        <>
            <h1 className="text-center mt-3">
                TodoApp (10) ,<small>pendientes: 2</small>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo = {handleDeleteTodo} onToogleTodo = {handleToogleTodo}/>
                </div>
                <div className="col-5">
                    <h3>Agregar TODO</h3>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};
