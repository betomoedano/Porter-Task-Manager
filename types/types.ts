export type Task = {
  id: string;
  task: string;
  tag: string;
  date: string;
};

export type TaskMap = {
  [key: string]: Task[];
};
