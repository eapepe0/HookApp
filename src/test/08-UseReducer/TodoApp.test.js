import { render, screen , fireEvent } from '@testing-library/react';
import { TodoApp } from '../../08-useReducer/TodoApp';
import { useTodos } from '../../hooks/useTodos';

jest.mock('../../hooks/useTodos')

describe('Pruebas en <TodoApp/>',()=>{
    useTodos.mockReturnValue({ // inicializamos el mock con los valores
        todos : [{ id:1, description : 'Todo Demo 1', done : false,},
        { id:2, description : 'Todo Demo 2', done : true,}],
        handleNewTodo : jest.fn(), // una funcion
        handleDeleteTodo : jest.fn(),
        handleToogleTodo : jest.fn(),
        todosCount : 2, // son 2 todods
        pendingTodosCount : 1, // uno solo es true
    })
    test('debe de mostrar el componente correctamente',()=>{
        render(<TodoApp/>)
        expect(screen.getByText('Todo Demo 1')).toBeTruthy(); // existe el demo 1
        expect(screen.getByText('Todo Demo 2')).toBeTruthy();  // existe el demo 2
        expect(screen.getByRole('textbox')).toBeTruthy();  // existe el input 

    })
});