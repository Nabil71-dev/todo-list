import { useReducer } from "react";
import { initialTaskTasks } from "../../../contant";
import { taskReducer } from "./task.reducer";
import { TaskContext, TaskDispatchContext } from "./task.context";

export default function TaskProvider({ children }: any) {
  const [task, dispatch] = useReducer(taskReducer, initialTaskTasks);
  return (
    <TaskContext.Provider value={task}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
