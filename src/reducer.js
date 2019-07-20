import uuidv4 from 'uuid/v4';

export default function(state, action) {
    switch (action.type) {
        case 'SET_CURRENT_TODO':
            return {
                ...state,
                currentTodo: action.payload
            };
        case 'TOGGLE_TODO':
            const toggledTodos = state.todos.map(t =>
                t.id === action.payload.id
                    ? { ...action.payload, complete: !action.payload.complete}
                    : t
            );

            return {
                ...state,
                todos: toggledTodos
            };
        case 'UPDATE_TODO':
            const updatedTodo = { ...state.currentTodo, text: action.payload};

            const updatedTodoIndex = state.todos.findIndex(t =>
                t.id === state.currentTodo.id
            );

            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ];

            return {
                ...state,
                todos: updatedTodos,
                currentTodo: {}
            };
        case 'REMOVE_TODO':
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return {
                ...state,
                todos: filteredTodos,
                currentTodo: isRemovedTodo
            };
        case 'ADD_TODO':
            if (!action.payload) {
                return state;
            }

            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            };

            const addedTodos = [ ...state.todos, newTodo];
            return {
                ...state,
                todos: addedTodos
            };
        default:
            return state;
    }
}