import React from "react";

type DraggableProps = {
  id: string;
};

const Draggable: React.FC<DraggableProps> = props => {
  const drag = (e: React.DragEvent<HTMLDivElement>) => {
    const id = (e.currentTarget as HTMLDivElement).id;
    e.dataTransfer.setData("transfer", id);
  };

  return (
    <div
      id={props.id}
      draggable={true}
      onDragStart={drag}
      onDragOver={e => e.stopPropagation()}
    >
      {props.children}
    </div>
  );
};

export default Draggable;
