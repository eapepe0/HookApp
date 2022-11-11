import { renderHook , act} from '@testing-library/react'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en el useCounter',()=>{
    test('debe retornar los valores por defecto',()=>{
        const { result } = renderHook(() => useCounter());
        const { counter ,  decrement , increment, reset } = result.current
        expect ( counter ).toBe(10) // espero que el valor sea 10
        expect ( decrement ).toEqual ( expect.any ( Function ));
        expect ( increment ).toEqual ( expect.any ( Function ));
        expect ( reset ).toEqual ( expect.any ( Function ));
    })
    test('debe de generar el counter con el valor de 100' , () =>{
        const { result } = renderHook ( () => useCounter(100));
        const { counter } = result.current

        expect( counter ).toEqual(100)
    })

    test('debe de generar en el counter , despues de incrementarlo y resetearlo volver al valor inicial',()=>{
        const { result } = renderHook ( () => useCounter(100)); //inicializamos con 100
        const { counter , increment,reset } = result.current
        act(()=>{ // si debemos usar funciones del hook usamos act
            increment();  // las usamos
            increment()
            reset();
        })
        expect( result.current.counter ).toEqual(100)
        
    })
    test('debe de generar en el counter , despues de incrementarlo',()=>{
        const { result } = renderHook ( () => useCounter(100));
        const { counter , increment } = result.current
        act(()=>{
            increment();
        })
        expect( result.current.counter ).toEqual(101)
    })
    test('debe de generar en el counter , despues de incrementarlo',()=>{
        const { result } = renderHook ( () => useCounter(100));
        const { counter , decrement } = result.current
        act(()=>{
            decrement();
        })
        expect( result.current.counter ).toEqual(99)
    })
});