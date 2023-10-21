import { Task } from "./types/types";

export const todos: Task[] = [
  {
    id: "1",
    task: "Learn React",
    tag: "front-end",
    date: "2023-11-05",
  },
  {
    id: "2",
    task: "Build a To-Do App",
    tag: "front-end",
    date: "2023-11-05",
  },
  {
    id: "3",
    task: "Review CSS Modules",
    tag: "front-end",
    date: "2023-11-05",
  },
];

export const initialState: { [key: string]: Task[] } = {
  toStart: [
    {
      id: "1",
      task: "Learn React",
      tag: "front-end",
      date: "2023-11-05",
    },
    {
      id: "2",
      task: "Build a To-Do App",
      tag: "front-end",
      date: "2023-11-05",
    },
    {
      id: "3",
      task: "Review CSS Modules",
      tag: "front-end",
      date: "2023-11-05",
    },
  ],
  inProgress: [],
  done: [
    {
      id: "4",
      task: "Get a Job",
      tag: "important",
      date: "2023-10-23",
    },
  ],
};
