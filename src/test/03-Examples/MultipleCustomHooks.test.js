import {render , screen , fireEvent} from '@testing-library/react'
import {MultipleCustomHooks} from '../../03-examples/MultipleCustomHooks'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch.js')
jest.mock('../../hooks/useCounter.js')
 
describe('Pruebas en <MultipleCustomHooks />',()=>{

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter : 1,
        increment : mockIncrement,
    })
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('debe de mostrar el componente por defecto',()=>{

        useFetch.mockReturnValue({
            data : null,
            isLoading: true,
            hasError : null,

        })
        const {container, getByRole } = render(<MultipleCustomHooks />);

        /* expect(screen.getByText('        Loading ...'))
        expect(screen.getBy('Breaking Bad Quotes'))  */

        const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain("Breaking Bad Quotes")
        //const nextButton = screen.getByRole('button', {name: 'Next Quote'});

        screen.debug()

    })

    test('debe mostrar un quote', () => { 
        useFetch.mockReturnValue({ // valor inicial de hook useFetch
            data : [{author : 'Coloso12', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError : null,

        })


        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy(); // si el boton no esta deshabilitado

        expect( screen.getByText('Hola Mundo')).toBeTruthy()
        expect( screen.getByText('Coloso12')).toBeTruthy()
        screen.debug()
     })

     test('Debe llamar a la funcion incrementar', () => { 
        
        

        useFetch.mockReturnValue({
            data : [{author : 'Coloso12', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError : null,
        })

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next Quote'});

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled


      })
});