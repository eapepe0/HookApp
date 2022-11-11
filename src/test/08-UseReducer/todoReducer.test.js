import {todoReducer} from '../../08-useReducer/TodoReducer'

describe('Pruebas en todoReducer',()=>{
    const initialState= [{
        id:1,
        description : 'Demo Todo',
        done : false,
    }];

    test('debe de regresar al estado inicial',()=>{
        const newState = todoReducer(initialState , {})
        expect(newState).toBe(initialState)
    })

    test('debe agregar un todo ', () =>{
        const action = {
            type : '[TODO] Add Todo' ,
            payload : {
                id: 2,
                description : 'Demo Todo',
                done: false,
            }
        };
        const newState = todoReducer(initialState , action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload )
    })

    test('debe de eliminar un todo',()=>{
        const action = {
            type : '[TODO] Add Todo' ,
            payload : {
                id: 2,
                description : 'Demo Todo 2',
                done: false,
            }
        };
        const newState = todoReducer(initialState , action) // agregamos un todo
        console.log(newState)

        const actionDelete = {
            type : '[TODO] Remove Todo',
            payload : 2
        }
        const newState2 = todoReducer(initialState, actionDelete) // lo borramos 
        expect(newState2.length).toBe(1) 
        
    })

    test('debe de realizar el toogle del Todo',()=>{
        const actionToogle = {
                type : '[TODO] Toogle Todo',
                payload : 1,
        }
        const newState = todoReducer(initialState , actionToogle)
        expect(newState[0].done).toBe(true);
        const newState2 = todoReducer(newState , actionToogle)
        expect(newState2[0].done).toBe(false);
    })
});