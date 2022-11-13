import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe("Hacemos pruebas en TodoItem", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
  };

  const onDeleteTodoMock = jest.fn();
  const onToogleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks()); // hacemos que cada vez que se corra el test las funciones vuelvan a su estado inicial

  test("debe de mostar el todo pendiente de completar", () => {
    render(
      <TodoItem //cargamos el componente
        todo={todo} // cargamos los datos iniciales
        onToogleTodo={onToogleTodoMock} // le cargamos la funcion de mentira (mock)
        onDeleteTodo={onDeleteTodoMock} // le cargamos la funcion de mentira (mock)
      />
    );

    const liElement = screen.getByRole("listitem")  // buscamos el li
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between') // vemos que tenga esta clase

    const spanElement = screen.getByLabelText('span') // buscamos el span , debemos crear un aria-label jest no encuentra span's
    expect(spanElement.className).toBe('align-self-center  ') // si le agregamos espacios al className  o sino
    expect(spanElement.className).toContain('align-self-center') // contiene
    expect(spanElement.className).not.toContain('text-decoration-line-through') // si la clase no contiene la parte tachada
  });

  test('debe de mostrar el todo completado', () => { 
    todo.done = true; // aca tenemos un todo completado
    render(
        <TodoItem //cargamos el componente
          todo={todo} // cargamos los datos iniciales
          onToogleTodo={onToogleTodoMock} // le cargamos la funcion de mentira (mock)
          onDeleteTodo={onDeleteTodoMock} // le cargamos la funcion de mentira (mock)
        />
      );
  

      const spanElement = screen.getByLabelText('span') // buscamos el span , debemos crear un aria-label jest no encuentra span's
      expect(spanElement.className).toContain('align-self-center') // si le agregamos espacios al className  o sino
      expect(spanElement.className).toContain('text-decoration-line-through') // contiene
      //expect(spanElement.className).not.toContain('') // si la clase no contiene la parte tachada
   })

   test('el span debe llamar al ToogleTodo cuando se hace click', () => { 

    render(
        <TodoItem //cargamos el componente
          todo={todo} // cargamos los datos iniciales
          onToogleTodo={onToogleTodoMock} // le cargamos la funcion de mentira (mock)
          onDeleteTodo={onDeleteTodoMock} // le cargamos la funcion de mentira (mock)
        />
      );

    const spanElement = screen.getByLabelText('span') // buscamos el span , debemos crear un aria-label jest no encuentra span's
    fireEvent.click(spanElement);
    expect(onToogleTodoMock).toBeCalledWith(todo.id); // esperamos que la funcion haya sido llamada con el argumento todo.id
    })

    test('el boton debe de llamar el deleteTodo', () => { 

        render(
            <TodoItem //cargamos el componente
              todo={todo} // cargamos los datos iniciales
              onToogleTodo={onToogleTodoMock} // le cargamos la funcion de mentira (mock)
              onDeleteTodo={onDeleteTodoMock} // le cargamos la funcion de mentira (mock)
            />
          );
    
        const buttonElement = screen.getByRole('button') // buscamos el boton
        fireEvent.click(buttonElement); // clickeamos sobre el 
        expect(onDeleteTodoMock).toBeCalledWith(todo.id); // esperamos que la funcion haya sido llamada con el argumento todo.id
        }) 
});
