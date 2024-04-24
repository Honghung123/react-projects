
export default function logger(reducerFunction) { 
    return (state, action) => {
        console.group(action.type);
        console.log("Previous state: ");
        console.log(state);
        console.log("Previous action: ");
        console.log(action);
        const newState = reducerFunction(state, action); 
        console.log("New state: ");
        console.log(newState);
        console.groupEnd();
        return newState;
    };
}