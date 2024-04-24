import { ADD_TASK, SET_TASK, REMOVE_TASK } from "./constants";
const initialState = {
    todo: "",
    todos: []
}

function reducer(state, action) {
    console.log(action);
    switch (action.type) { 
        case SET_TASK: {
            return { ...state, todo: action.name };
        }
        case ADD_TASK: {
            const newTodos = [...state.todos, action.name]; 
            return { ...state, todo: "", todos: newTodos}
        }
        case REMOVE_TASK: { 
            if (action.hasOwnProperty("index")) { 
                const newTodos = state.todos.splice(action.index, 1);
                return { ...state, todos: [...newTodos]} 
            }
            return state;
        }
        default:
            throw new Error("Invalid action type");
    }
}

export {initialState};
export default reducer;