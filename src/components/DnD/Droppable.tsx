import React from "react";
import styled from "styled-components";

type DroppableProps = {
  id: string;
};

const StyledDragDiv = styled.div`
  height: 6rem;
  background-color: orangered;
  display: flex;
`;

const Droppable: React.FC<DroppableProps> = () => {

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    const node = document.getElementById(data);
    //@ts-ignore
    e.currentTarget.appendChild(node);
  };

  return (
    <>
      <StyledDragDiv
        onDrop={e => drop(e)}
        onDragOver={e => e.preventDefault()}
        id="dragDiv"
      ></StyledDragDiv>
    </>
  );
};

export default Droppable;
