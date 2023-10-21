"use client";
import { todos } from "@/dommyData";
import { useCallback, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import TaskItem from "./TaskItem";

export default function Dashboard() {
  const [tasks, setTasks] = useState(todos);

  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
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
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
