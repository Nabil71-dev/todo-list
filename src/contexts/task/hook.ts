import { useContext } from "react";
import { TaskContext, TaskDispatchContext } from "./task.context";

export function useTasks() {
    return useContext(TaskContext);
}

export function useTasksDispatch() {
    return useContext(TaskDispatchContext);
}