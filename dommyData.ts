import { Task, TaskMap } from "./types/types";

export const todos: Task[] = [
  {
    id: "1",
    task: "Learn React",
    description: "Description with some more text here",
    tag: "Low",
    date: "Sun Oct 22 2023",
  },
  {
    id: "2",
    task: "Build a To-Do App",
    description: "Description with some more text here",
    tag: "Low",
    date: "Sun Oct 22 2023",
  },
  {
    id: "3",
    task: "Review CSS Modules",
    description: "Description with some more text here",
    tag: "Low",
    date: "Sun Oct 22 2023",
  },
];

export const initialState: TaskMap = {
  Pending: [
    {
      id: "1",
      task: "Learn React",
      description: "Description with some more text here",
      tag: "Low",
      date: "Sun Oct 22 2023",
    },
    {
      id: "2",
      task: "Build a To-Do App",
      description: "Description with some more text here",
      tag: "Low",
      date: "Sun Oct 22 2023",
    },
    {
      id: "3",
      task: "Review CSS Modules",
      description: "Description with some more text here",
      tag: "Low",
      date: "Sun Oct 22 2023",
    },
  ],
  Ongoing: [],
  Done: [
    {
      id: "4",
      task: "Get a Job",
      description: "Description with some more text here",
      tag: "High",
      date: "2023-10-23",
    },
  ],
};
