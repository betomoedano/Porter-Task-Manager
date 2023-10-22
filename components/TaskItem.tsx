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
import { Button } from "./ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

type TaskItemProps = {
  task: Task;
  isDragging: boolean;
  provided: DraggableProvided;
};

function TaskItem({ isDragging, provided, task }: TaskItemProps) {
  return (
    <li
      className="group"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card className={cn(isDragging ? "bg-slate-50" : "")}>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>{task.task}</CardTitle>
            <Button
              className="group-hover:flex"
              variant="destructive"
              size="icon"
            >
              <TrashIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
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
