/**
 * This component contains a Column e.g. Todo, In Progress, Complete, etc.
 */

import { Task } from "@/types/types";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import TaskList from "./TaskList";

type ColumnProps = {
  listTitle: string;
  listOfTasks: Task[];
  index: number;
};

export default function Column({ index, listOfTasks, listTitle }: ColumnProps) {
  return (
    <Draggable draggableId={listTitle} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskList
            listId={listTitle}
            listType="TASK"
            listOfTasks={listOfTasks}
            isDropDisabled={false}
            listTitle={listTitle}
          />
        </div>
      )}
    </Draggable>
  );
}
