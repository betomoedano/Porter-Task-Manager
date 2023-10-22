import { Task, TaskMap } from "./types/types";

export const todos: Task[] = [
  {
    id: "1",
    task: "Learn React",
    description: "Description with some more text here",
    tag: "front-end",
    date: "2023-11-05",
  },
  {
    id: "2",
    task: "Build a To-Do App",
    description: "Description with some more text here",
    tag: "front-end",
    date: "2023-11-05",
  },
  {
    id: "3",
    task: "Review CSS Modules",
    description: "Description with some more text here",
    tag: "front-end",
    date: "2023-11-05",
  },
];

export const initialState: TaskMap = {
  Pending: [
    {
      id: "1",
      task: "Learn React",
      description: "Description with some more text here",
      tag: "front-end",
      date: "2023-11-05",
    },
    {
      id: "2",
      task: "Build a To-Do App",
      description: "Description with some more text here",
      tag: "front-end",
      date: "2023-11-05",
    },
    {
      id: "3",
      task: "Review CSS Modules",
      description: "Description with some more text here",
      tag: "front-end",
      date: "2023-11-05",
    },
  ],
  Ongoing: [],
  Done: [
    {
      id: "4",
      task: "Get a Job",
      description: "Description with some more text here",
      tag: "important",
      date: "2023-10-23",
    },
  ],
};
