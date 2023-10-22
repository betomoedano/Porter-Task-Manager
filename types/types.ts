import { DraggableLocation } from "react-beautiful-dnd";

export type Task = {
  id: string;
  task: string;
  tag: string;
  date: string;
};

export type TaskMap = {
  [key: string]: Task[];
};

export type Board = {
  columns: TaskMap;
  ordered: string[];
};

export type BoardAction =
  | { type: "ADD_TASK"; payload: string }
  | { type: "REMOVE_TASK"; payload: number }
  | { type: "MOVE_TASK"; payload: OnDragPayload }
  | { type: "MOVE_COLUMN"; payload: OnDragPayload };

type OnDragPayload = {
  source: DraggableLocation;
  destination: DraggableLocation;
};
