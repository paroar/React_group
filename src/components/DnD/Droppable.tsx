import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FilmContext } from "../../contexts/FilmContext";

type DroppableProps = {
  id: string;
};

type listItem = {
  id: string;
};

type open = {
  open: boolean;
};

const StyledDragDiv = styled.div<open>`
  height: ${p => (p.open ? "12rem" : "0")};
  background-color: orangered;
  display: flex;
`;

const Droppable: React.FC<DroppableProps> = () => {

  const {films} = useContext(FilmContext);

  const [open, setopen] = useState(false);
  const [list, setlist] = useState<listItem[]>([]);

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    const node = document.getElementById(data);
    //@ts-ignore
    if(!list.some(l => l === node.id)){
    //@ts-ignore
    setlist([...list, node.id]);
    }
  };

  const handleopen = () => {
    setopen(!open);
  };
  
  console.log(films);
  
  return (
    <>
      <StyledDragDiv
        onDrop={e => drop(e)}
        onDragOver={e => e.preventDefault()}
        open={open}
        id="dragDiv"
      >
        {list.map(mov => (
          <div id={mov.id}>
            <p>{mov.id}</p>
          </div>
        ))}
      </StyledDragDiv>
      <span onClick={handleopen}>+</span>
    </>
  );
};

export default Droppable;
