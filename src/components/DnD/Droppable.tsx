import React, { useState, useEffect } from "react";
import styled from "styled-components";

type DroppableProps = {
  voteId: number;
  handleVote: (voteId: string, state: number) => void;
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

const Droppable: React.FC<DroppableProps> = (props) => {
  const [state] = useState(props.voteId);
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

  useEffect(() => {
    const update = () => {
      console.log("VOTEID", pick.id);
      console.log("STATE", state);
      props.handleVote(pick.id, state);
    }
    update();
  }, [pick])



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
