import { createContext } from "react";
import type { Dispatch } from "react";

export const TaskContext = createContext<any[]>([]);
export const TaskDispatchContext = createContext<Dispatch<any>>(() => {
  throw new Error("TaskDispatchContext not initialized");
});
