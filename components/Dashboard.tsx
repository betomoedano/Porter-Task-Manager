"use client";
import { initialState, todos } from "@/dommyData";
import { useCallback, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import TaskItem from "./TaskItem";
import Column from "./Column";

export default function Dashboard() {
  const [dashboardState, setDashboardState] = useState({
    columns: initialState,
    ordered: Object.keys(initialState),
  });

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
  const onDragEnd = useCallback(
    (result: DropResult) => {
      // the only one that is required
      // console.log(result);
      if (!result.destination) return; // dropped nowhere

      const source: DraggableLocation = result.source;
      const destination: DraggableLocation = result.destination;

      // did not move anywhere - can bail early
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }

      // Reordering column
      if (result.type === "COLUMN") {
        const result = [...dashboardState.ordered];
        const [removed] = result.splice(source.index, 1);
        result.splice(destination.index, 0, removed);

        setDashboardState({ ...dashboardState, ordered: result });
      }
    },
    [dashboardState]
  );

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="dashboard" type="COLUMN" direction="horizontal">
        {(provided, snapshot) => (
          <ul
            className="md:grid grid-cols-3 gap-3"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {dashboardState.ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                listTitle={key}
                listOfTasks={dashboardState.columns[key]}
              />
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
