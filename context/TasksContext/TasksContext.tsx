"use client";
import * as React from "react";
import { initialState } from "@/dommyData";
import { BoardAction, TaskMap } from "@/types/types";

const TasksContext = React.createContext({
  tasks: initialState,
  dispatch: (action: BoardAction) => {},
});

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, dispatch] = React.useReducer(tasksReducer, initialState);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

/**
 * custom hook for easy context usage :)
 */
export function useTasks() {
  return React.useContext(TasksContext);
}

/**
 * Tasks reducer
 * This function handles actions on the state
 */

function tasksReducer(state: TaskMap, action: BoardAction): TaskMap {
  switch (action.type) {
    case "ADD_TASK": {
    }
    case "REMOVE_TASK": {
    }
    case "MOVE_COLUMN": {
    }
    case "MOVE_TASK": {
    }
    default: {
      return initialState;
    }
  }
}
