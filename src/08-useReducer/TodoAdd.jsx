import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {
    const { description , onInputChange , onResetForm } = useForm({
        description : ''
    })

    const onFormSubmit = ( event ) =>{
        event.preventDefault();
        if(description.length <= 1) return
        const newTodo = {
            id: new Date().getTime(),
            done : false,
            description,
        }
        onNewTodo(newTodo);
        onResetForm();
    }
    return (
        <form action="" onSubmit={ onFormSubmit }>
            <input type="text" className="form-control" value={ description } onChange = { onInputChange } name = 'description'/>
            <div className='d-flex justify-content-end'>
                <button type="submit" className="btn btn-outline-primary mt-3">Agregar</button>
            </div>
        </form>
    )
}
