import {MainApp} from '../../09-useContext/MainApp'
import { render, screen , fireEvent } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en el componente <MainApp /> , la parte de Router',()=>{
    test('debe mostrar el HomePage',()=>{
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
    screen.debug()
    expect(screen.getByText("HomePage")).toBeTruthy()

    })

    test('debe mostrar el LoginPage',()=>{
        render( // con el initialEntries le decimos a MemoryRouter donde estamos
            <MemoryRouter initialEntries={['/login']}> 
                <MainApp/>
            </MemoryRouter>
        );
    screen.debug()
    expect(screen.getByText("LoginPage")).toBeTruthy() // buscamos que el texto LoginPage este presente

    })
});