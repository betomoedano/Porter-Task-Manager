import { DraggableLocation } from "react-beautiful-dnd";

export type Task = {
  id: string;
  task: string;
  tag: string;
  date: string;
  description: string;
};

export type TaskMap = {
  [key: string]: Task[];
};

export type Board = {
  columns: TaskMap;
  ordered: string[];
};

export type BoardAction =
  | { type: "SET_TASKS"; payload: Board }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: RemoveTaskPayload }
  | { type: "MOVE_TASK"; payload: OnDragPayload }
  | { type: "MOVE_COLUMN"; payload: OnDragPayload };

type OnDragPayload = {
  source: DraggableLocation;
  destination: DraggableLocation;
};

type RemoveTaskPayload = {
  id: string;
};
