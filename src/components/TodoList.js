import React, { useContext } from 'react';
import TodosContext from '../context';

const TodoList = () => {
    const {state, dispatch} = useContext(TodosContext);

    return (
        <div className="container">
            <h1 className="mx-auto">Todos items: <span className="badge badge-primary badge-pill">{state.todos.length}</span></h1>
            <ul className="list-group">
                {state.todos.map(item => (
                    <li
                        onDoubleClick={() => dispatch({type: "TOGGLE_TODO", payload: item})}
                        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${item.complete && 'disabled'}`}
                        key={item.id}
                    >
                        <input type="checkbox" checked={item.complete} onChange={() => dispatch({type: "TOGGLE_TODO", payload: item})} />
                        <span>{item.text}</span>
                        <div>
                            <button className="btn btn-link" onClick={() => dispatch({ type: 'SET_CURRENT_TODO', payload: item})}>
                                <img src="https://icon.now.sh/edit/" alt="edit" />
                            </button>
                            <button
                                className="btn btn-link"
                                onClick={() => dispatch({type: 'REMOVE_TODO', payload: item})}
                            >
                                <img src="https://icon.now.sh/delete/" alt="delete" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;