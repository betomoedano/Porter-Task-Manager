export type Task = {
  id: string;
  task: string;
  tag: string;
  date: string;
};

export type TaskMap = {
  [key: string]: Task[];
};

export type BoardAction =
  | { type: "ADD_TASK"; payload: string }
  | { type: "REMOVE_TASK"; payload: number }
  | { type: "MOVE_COLUMN"; payload: number }
  | { type: "MOVE_TASK"; payload: number };
