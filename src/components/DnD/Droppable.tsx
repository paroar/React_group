import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

type DroppableProps = {
  voteId: number;
  handleVote: (voteId: string, state: number) => void;
};

const StyledDragDiv = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  height: 10rem;
  & > * {
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
    if (data) {
      const node = document.getElementById(data);
      if (node) {
        //@ts-ignore
        setPick({ id: node.id, path: node.firstChild.currentSrc });
      }
    }
  };

  const handleVote = useCallback(
    props.handleVote,
    [],
  ) 

  useEffect(() => {
    const update = () => {
      handleVote(pick.id, state);
    };
    update();
  }, [pick, handleVote]);

  return (
    <>
      <StyledDragDiv
        onDrop={e => drop(e)}
        onDragOver={e => e.preventDefault()}
        id="dragDiv"
      >
        <img src={pick.path} alt="" />
      </StyledDragDiv>
    </>
  );
};

export default Droppable;
