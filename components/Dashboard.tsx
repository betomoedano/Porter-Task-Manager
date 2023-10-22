"use client";
import { initialState } from "@/dommyData";
import { useCallback, useState } from "react";
import {
  DragDropContext,
  Droppable,
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
        return;
      }

      // Reordering or moving tasks
      if (result.type === "TASK") {
        if (source.droppableId === destination.droppableId) {
          // Reordering within the same column
          const reorderedTasks = [
            ...dashboardState.columns[source.droppableId],
          ];
          const [movedTask] = reorderedTasks.splice(source.index, 1);
          reorderedTasks.splice(destination.index, 0, movedTask);

          setDashboardState({
            ...dashboardState,
            columns: {
              ...dashboardState.columns,
              [source.droppableId]: reorderedTasks,
            },
          });
          return; // Exit after handling reordering within the same column
        }

        // Handling movement between different columns
        const startTasks = [...dashboardState.columns[source.droppableId]];
        const finishTasks = [
          ...dashboardState.columns[destination.droppableId],
        ];
        const [removedTask] = startTasks.splice(source.index, 1);
        finishTasks.splice(destination.index, 0, removedTask);

        setDashboardState({
          ...dashboardState,
          columns: {
            ...dashboardState.columns,
            [source.droppableId]: startTasks,
            [destination.droppableId]: finishTasks,
          },
        });
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
            className="grid md:grid-cols-3 gap-3"
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
