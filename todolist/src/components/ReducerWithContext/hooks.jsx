import { useContext } from "react";
import {TaskContext} from ".";

export const useTask = () => {
    // const [state, dispatch] = useContext(TaskContext); return [state, dispatch];
    return useContext(TaskContext);
}