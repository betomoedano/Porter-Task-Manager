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
import { cn } from "@/lib/utils";

type TaskItemProps = {
  task: Task;
  isDragging: boolean;
  provided: DraggableProvided;
};

function TaskItem({ isDragging, provided, task }: TaskItemProps) {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card className={cn("w-[350px]", isDragging ? "bg-slate-50" : "")}>
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
