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
          <CardHeader>{listTitle}</CardHeader>
          <CardContent>
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
    <>
      {title}
      <div ref={dropProvided.innerRef}>
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
    </>
  );
}
