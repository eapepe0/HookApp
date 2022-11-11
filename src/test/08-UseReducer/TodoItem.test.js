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
});
