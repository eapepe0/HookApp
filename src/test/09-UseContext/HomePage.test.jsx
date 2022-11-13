import { render, screen } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import {HomePage} from '../../09-useContext/HomePage'



describe('Pruebas a HomePage',()=>{
    const user = {
        id: 123,
        name: 'Coloso12',
        password: '123456',
        mail : 'eapepe0@gmail.com'
    } 
    test('Debe mostrar el componente sin el usuario',()=>{
        render(
            <UserContext.Provider value={{user : null}}>
                <HomePage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('preTag')
        expect(preTag.innerHTML).toBe('null');

    })

    test('Debe mostrar el componente con el usuario',()=>{
        render(
            <UserContext.Provider value={{user : user}}>
                <HomePage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('preTag')
        expect(preTag.innerHTML).toContain(user.id.toString()) // convertir a string por que sino lo toma como numero

    })

    
});