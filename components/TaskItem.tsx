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
import { DotIcon, DotsHorizontalIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type TaskItemProps = {
  task: Task;
  isDragging: boolean;
  provided: DraggableProvided;
};

function TaskItem({ isDragging, provided, task }: TaskItemProps) {
  return (
    <li
      className="relative"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card className={cn(isDragging ? "bg-slate-50" : "")}>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>{task.task}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="absolute right-5 top-5 h-6 w-6"
                >
                  <DotsHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <Button variant="destructive" size="icon">
                  <TrashIcon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
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
