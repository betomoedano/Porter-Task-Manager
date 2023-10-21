import * as React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@/types/types";
import { DraggableProvided } from "react-beautiful-dnd";

type TaskItemProps = {
  task: Task;
  isDragging: boolean;
  provided: DraggableProvided;
};

function TaskItem({ isDragging, provided, task }: TaskItemProps) {
  return (
    <li
      className="border border-blue-500 w-fit p-3"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{task.task}</CardTitle>
          <CardDescription>
            Description with some more text here
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <CardDescription>{new Date().toDateString()}</CardDescription>
        </CardFooter>
      </Card>
    </li>
  );
}

export default React.memo<TaskItemProps>(TaskItem);
