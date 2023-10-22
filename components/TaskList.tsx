import * as React from "react";
import { Task } from "@/types/types";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { Card, CardContent, CardHeader } from "./ui/card";
import TaskItem from "./TaskItem";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateTaskForm from "./CreateTaskForm";
import { cn } from "@/lib/utils";

type TaskListProps = {
  listTitle?: string;
  listId?: string;
  listType?: string;
  listOfTasks: Task[];
  isDropDisabled?: boolean;
};

/**
 *
 * This component supports dropping items
 * It also renders a list of draggables
 *
 */

export default function TaskList({
  listTitle,
  listOfTasks,
  isDropDisabled,
  listId = "LIST",
  listType,
}: TaskListProps) {
  const [showForm, setShowForm] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowForm((open) => !open);
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setShowForm(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      isDropDisabled={isDropDisabled}
    >
      {(
        dropProvided: DroppableProvided,
        dropSnapshot: DroppableStateSnapshot
      ) => (
        <Card {...dropProvided.droppableProps}>
          <CardHeader className="h-20 flex flex-row justify-between text-xl font-bold">
            {listTitle}
            {listTitle === "Pending" && (
              <Button
                variant={"secondary"}
                size={"icon"}
                onClick={() => setShowForm(!showForm)}
              >
                <PlusIcon
                  className={cn(
                    showForm ? "rotate-45" : "",
                    "transition-all ease-in-out"
                  )}
                />
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {listTitle === "Pending" && showForm && (
              <div className="mb-3">
                <CreateTaskForm setShowForm={setShowForm} />
              </div>
            )}
            <InnerList
              listOfTasks={listOfTasks}
              dropProvided={dropProvided}
              title={listTitle}
            />
          </CardContent>
        </Card>
      )}
    </Droppable>
  );
}

type InnerListProps = {
  dropProvided: DroppableProvided;
  listOfTasks: Task[];
  title?: string;
};

function InnerList({ title, listOfTasks, dropProvided }: InnerListProps) {
  return (
    <div ref={dropProvided.innerRef} className="grid grid-cols-1 gap-3">
      {listOfTasks.map((task, index) => {
        return (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(
              dragProvided: DraggableProvided,
              dragSnapshot: DraggableStateSnapshot
            ) => (
              <TaskItem
                key={task.id}
                task={task}
                provided={dragProvided}
                isDragging={dragSnapshot.isDragging}
              />
            )}
          </Draggable>
        );
      })}
      {dropProvided.placeholder}
    </div>
  );
}
