import React, { useState } from "react";
import styled from "styled-components";

type DroppableProps = {
  id: string;
};

const StyledDragDiv = styled.div`
  margin: auto;
  display:flex;
  justify-content: center;
  height: 10rem;
  & > *{
    margin: 1rem;
  }
`;

const Droppable: React.FC<DroppableProps> = () => {
  const [pick, setPick] = useState({
    id: "",
    path: ""
  });

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    const node = document.getElementById(data);
    //@ts-ignore
    setPick({id: node.id, path: node.firstChild.currentSrc});
  };

  return (
    <>
      <StyledDragDiv
        onDrop={e => drop(e)}
        onDragOver={e => e.preventDefault()}
        id="dragDiv"
      >
        <img src={pick.path} alt=""/>
      </StyledDragDiv>
    </>
  );
};

export default Droppable;
