'use client';
import { KanbanColumnNormalized } from '@kanban/kanban-redux';
import { useMemo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { tasksSelectorFactory } from '../../../selectors';
import { useAppSelector } from '../../../hooks';
import { ColumnTitle } from '../column-title';
import { ColumnItem } from '../column-item';

export interface ColumnContentProps {
  column: KanbanColumnNormalized;
}

export const ColumnContent = ({ column: columnData }: ColumnContentProps) => {
  const taskSelector = useMemo(
    () => tasksSelectorFactory(columnData.columnId),
    [columnData.columnId],
  );

  const tasks = useAppSelector(taskSelector);

  return (
    <div className="flex flex-col gap-6 min-w-[17.5rem]">
      <ColumnTitle
        title={columnData.title}
        itemCount={columnData.tasks.length}
      />
      <Droppable droppableId={`${columnData.columnId}`}>
        {({ droppableProps, innerRef, placeholder }) => (
          /* gap is specified in ColumnItem as a bottom margin */
          /* this seems to be a limitation of react-beautiful-dnd */
          /* using gaps cause problems */
          <div className="flex flex-col" ref={innerRef} {...droppableProps}>
            {tasks.map((task, index) => (
              <ColumnItem
                task={task}
                key={task.taskId}
                columnId={columnData.columnId}
                index={index}
              />
            ))}
            {/* specifying height is needed for the placeholder */}
            {/* other-wise the placeholder will have 0px height and user won't be able to*/}
            {/* add tasks to an empty column */}
            <div className="h-8">{placeholder}</div>
          </div>
        )}
      </Droppable>
    </div>
  );
};
