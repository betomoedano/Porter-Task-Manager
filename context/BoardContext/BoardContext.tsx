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
    case "MOVE_COLUMN": {
      const result = [...state.ordered];
      const [removed] = result.splice(action.payload.source.index, 1);
      result.splice(action.payload.destination.index, 0, removed);

      return { ...state, ordered: result };
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

        // Exit after handling reordering within the same column
        return {
          ...state,
          columns: {
            ...state.columns,
            [action.payload.source.droppableId]: reorderedTasks,
          },
        };
      }

      // Handling movement between different columns
      const startTasks = [...state.columns[action.payload.source.droppableId]];
      const finishTasks = [
        ...state.columns[action.payload.destination.droppableId],
      ];
      const [removedTask] = startTasks.splice(action.payload.source.index, 1);
      finishTasks.splice(action.payload.destination.index, 0, removedTask);

      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.source.droppableId]: startTasks,
          [action.payload.destination.droppableId]: finishTasks,
        },
      };
    }
    case "ADD_TASK": {
    }
    case "REMOVE_TASK": {
    }
    default: {
      return boardInitialState;
    }
  }
}
