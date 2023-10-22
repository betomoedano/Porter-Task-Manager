"use client";
import * as React from "react";
import { initialState } from "@/dommyData";
import { Board, BoardAction } from "@/types/types";

const boardInitialState: Board = {
  columns: initialState,
  ordered: Object.keys(initialState),
};

const BoardContext = React.createContext({
  boardState: boardInitialState,
  dispatch: (action: BoardAction) => {},
});

export const BoardProvider = ({ children }: React.PropsWithChildren) => {
  const [boardState, dispatch] = React.useReducer(
    boardReducer,
    boardInitialState
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    const localBoardData = localStorage.getItem("@Board");

    if (localBoardData === null) {
      localStorage.setItem("@Board", JSON.stringify(boardInitialState));
    } else {
      const dataObject = JSON.parse(localBoardData);
      dispatch({ type: "SET_TASKS", payload: dataObject });
    }
    setLoading(false);
  }

  if (loading) return;
  return (
    <BoardContext.Provider value={{ boardState, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

/**
 * custom hook for easy context usage :)
 */
export function useBoard() {
  return React.useContext(BoardContext);
}

/**
 * Tasks reducer
 * This function handles actions on the state
 */

function boardReducer(state: Board, action: BoardAction): Board {
  switch (action.type) {
    case "SET_TASKS": {
      return action.payload;
    }
    case "MOVE_COLUMN": {
      const result = [...state.ordered];
      const [removed] = result.splice(action.payload.source.index, 1);
      result.splice(action.payload.destination.index, 0, removed);

      const newState = { ...state, ordered: result };
      // save locally
      localStorage.setItem("@Board", JSON.stringify(newState));
      return newState;
    }
    case "MOVE_TASK": {
      if (
        action.payload.source.droppableId ===
        action.payload.destination.droppableId
      ) {
        // Reordering within the same column
        const reorderedTasks = [
          ...state.columns[action.payload.source.droppableId],
        ];
        const [movedTask] = reorderedTasks.splice(
          action.payload.source.index,
          1
        );
        reorderedTasks.splice(action.payload.destination.index, 0, movedTask);

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [action.payload.source.droppableId]: reorderedTasks,
          },
        };
        // save locally
        localStorage.setItem("@Board", JSON.stringify(newState));
        // Exit after handling reordering within the same column
        return newState;
      }

      // Handling movement between different columns
      const startTasks = [...state.columns[action.payload.source.droppableId]];
      const finishTasks = [
        ...state.columns[action.payload.destination.droppableId],
      ];
      const [removedTask] = startTasks.splice(action.payload.source.index, 1);
      finishTasks.splice(action.payload.destination.index, 0, removedTask);

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.source.droppableId]: startTasks,
          [action.payload.destination.droppableId]: finishTasks,
        },
      };

      // save locally
      localStorage.setItem("@Board", JSON.stringify(newState));

      return newState;
    }
    case "ADD_TASK": {
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          ["Pending"]: [action.payload, ...state.columns.Pending],
        },
      };

      // save
      localStorage.setItem("@Board", JSON.stringify(newState));

      return newState;
    }
    case "REMOVE_TASK": {
      // I'm sure there is a better way to do this :')
      const taskToRemoveId = action.payload.id;
      const newState = { ...state };

      for (const column of Object.keys(state.columns)) {
        newState.columns[column] = newState.columns[column].filter(
          (task) => task.id !== taskToRemoveId
        );
      }
      // save
      localStorage.setItem("@Board", JSON.stringify(newState));

      return newState;
    }
    default: {
      return boardInitialState;
    }
  }
}
