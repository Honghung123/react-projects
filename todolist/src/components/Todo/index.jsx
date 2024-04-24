import { useReducer, useState, useRef } from 'react'
import { initialTasks, taskReducer } from "./taskReducer";
import { SET_JOB, EDIT_JOB, ADD_JOB, DELETE_JOB } from './constants';
import logger from './logger';

function MyTask() {
  const [tasks, dispatch] = useReducer(logger(taskReducer), initialTasks);
  const { job, jobs } = tasks;
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();
  return (
    <>
      <h4>
        Add new task:{" "}
        <input
          ref={inputRef}
          value={job}
          className="text-black"
          onChange={(e) => dispatch({ type: SET_JOB, name: e.target.value })}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: ADD_JOB,
              name: job,
            });
            inputRef.current.focus();
          }}
        >
          Add task
        </button>
      </h4>
      <h4>
        List of tasks:
        {jobs.map((j) => (
          <div key={j.id}>
            <span className="text-sky-500 font-bold">{j.name}</span>
            <button
              className="bg-rose-300 hover:ring hover:ring-rose-500 mx-4"
              onClick={() => setIsEditing(!isEditing)}
            >
              Edit task
            </button>
            <button
              className="bg-rose-300 hover:ring hover:ring-rose-500 mx-4"
              onClick={() => dispatch({ type: DELETE_JOB, id: j.id })}
            >
              Delete task
            </button>
          </div>
        ))}
      </h4>
    </>
  );
}

export default MyTask;
