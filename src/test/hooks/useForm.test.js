import { renderHook , act } from '@testing-library/react';
import {useForm} from '../../hooks/useForm'

describe('Pruebas en useForm ',()=>{
    const initialForm = {
        name : "Coloso",
        mail : "eapepe0@gmail.com",
    }
    test('debe regresar los valores por defecto',()=>{
        const { result } = renderHook( () => useForm( initialForm ) );
        expect (result.current).toEqual({
            name: initialForm.name,
            mail: initialForm.mail,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ), 
        })
    })

    test('debe regresar un valor distinto si lo cambiamos con la funcion onInputChange',() => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current
        act(()=>{
            onInputChange({target: {name:'name', value:"Coloso12"}});
        })
        expect (result.current.name).toEqual("Coloso12")
    })

    test('debe realizar el reset',() => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange , onResetForm } = result.current
        act(()=>{
            onInputChange({target: {name:'name', value:"Coloso12"}});
            onInputChange({target: {name:'mail', value:"eapepe0@hotmail.com"}});
            onResetForm()
        })
        expect (result.current.name).toEqual("Coloso")
        expect (result.current.mail).toEqual("eapepe0@gmail.com")
    })
});