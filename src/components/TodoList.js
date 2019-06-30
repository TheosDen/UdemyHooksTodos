import React, { useContext } from 'react';
import TodosContext from '../context';

const TodoList = () => {
    const {state, dispatch} = useContext(TodosContext);

    console.log(state);

    const title = `${state.todos.length} Todos`;

    return (
        <div className="container mx-auto max-w-md text-center font-mono">
            <h1>{title}</h1>
            <ul>
                {state.todos.map(item => (
                    <li key={item.id}>
                        <input type="checkbox" checked={item.complete}/>
                        <span>{item.text}</span>
                        <button>
                            <img src=""/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;