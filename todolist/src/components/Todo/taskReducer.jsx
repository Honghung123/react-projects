import { SET_JOB, ADD_JOB, EDIT_JOB, DELETE_JOB } from "./constants";

// 1. Create a initialState and Write function Reducer: reducerFunc(state,action)

// 2. Declare a state from the useReducer: const [state, dispatch] = useReducer(initialState)

// 3. Call dispatch from user actions: dispatch(action)

// ---------------------------


export const initialTasks = {
  job: "",
  jobs: [
    { id: 1, name: "Sweep the floor" },
    { id: 2, name: "Make the bed" },
  ],
};
// Helpers
function findMaxId(tasks) { 
    const len = tasks.length;
    return (len > 0) ? tasks[len - 1].id : 1;
}
export function taskReducer(tasks, action) { 
    switch (action.type) { 
        case SET_JOB: {
            return {
                ...tasks,
                job: action.name
            }
        }
        case ADD_JOB: {
            const newTask = {
                id: findMaxId(tasks.jobs) + 1,
                name: action.name
            }
            return {
              ...tasks,
              job: "",
              jobs: [...tasks.jobs, newTask],
            };
        }
        case EDIT_JOB: { 
            const changedTask = tasks.jobs.find(task => task.id === action.id);
            changedTask.name = action.name;
            return { ...tasks, job: "", jobs: [...tasks.jobs] }; 
        }
        case DELETE_JOB: { 
            const newJobs = tasks.jobs.filter((task) => task.id !== action.id);
            return {
                ...tasks,
                jobs: newJobs
            }
        }
        default: {
            throw new Error("Invalid action: " + action);
            }
    }
}
 