import {LoginPage} from '../../09-useContext/LoginPage'
import { render, screen , fireEvent } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';

describe('Pruebas a <LoginPage />',()=>{
    const setUserMock = jest.fn() // creamos una funcion de mentira
    test('debe de mostrar el componente sin el usuario',()=>{
        render( // renderizamos con el provider
        <UserContext.Provider value={{user : null}}> 
            <LoginPage/>
        </UserContext.Provider>
        )
       const preTag = screen.getByLabelText('pre') // sacamos el pre
       expect(preTag.innerHTML).toBe('null'); // nos fijamos si en medio hay un null
    })

    test('debe llamar al setUser cuando se hace click en el boton', () => {
        render( // renderizamos con un usuario nulo y una funcion de mentira
            <UserContext.Provider value={{user : null , setUser : setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
            )
        const buttonElement = screen.getByRole('button') // seleccionamos el boton
        fireEvent.click(buttonElement); // lo clickeamos
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: "jj" , mail: 'eapepe0@gmail.com'}) // esperamos que la funcion de mentira sea llamanda con el objeto este

    })
    
});