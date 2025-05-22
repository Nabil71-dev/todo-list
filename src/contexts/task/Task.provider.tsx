import { useReducer } from "react";
import { taskReducer } from "./task.reducer";
import { TaskContext, TaskDispatchContext } from "./task.context";
import { initialTaskTasks } from "../../contant";

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
