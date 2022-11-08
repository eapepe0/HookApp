import React, { useReducer, useState, useEffect } from 'react';
import { todoReducer, TodoItem, TodoList, TodoAdd } from './index';
import { useTodos } from '../hooks/useTodos'

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToogleTodo, todosCount, pendingTodosCount } = useTodos();

    return (
        <>

            <h1 className="text-center mt-3">TodoApp  ({todosCount}),<small>pendientes: {pendingTodosCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToogleTodo={handleToogleTodo} />
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
