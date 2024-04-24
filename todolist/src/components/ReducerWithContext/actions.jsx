import { ADD_TASK, SET_TASK, REMOVE_TASK } from "./constants";

export const setTask = (task) => {
    return {
        type: SET_TASK,
        name: task
    }
}

export const addTask = (task) => { 
    return {
        type: ADD_TASK,
        name: task
    }
}

export const removeTask = (index) => { 
    return {
        type: REMOVE_TASK,
        index: index
    }
}