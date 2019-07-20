import React, {useState, useContext, useEffect} from 'react';
import TodosContext from '../context';

const TodoForm = () => {
    const [ todo, setTodo ] = useState('');
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (currentTodo.id) {
            dispatch({ type: 'UPDATE_TODO', payload: todo });
        } else {
            dispatch({ type: 'ADD_TODO', payload: todo });
        }
        setTodo('');
    };

    useEffect(() => {
        if (currentTodo.id) {
            setTodo(currentTodo.text);
        } else {
            setTodo('');
        }
    }, [currentTodo.id]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="inputTodoName"
                        placeholder="Enter todo name"
                        onChange={e => setTodo(e.target.value)}
                        value={todo}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default TodoForm;