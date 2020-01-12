import React, { useState } from "react";
import styled from "styled-components";

type DroppableProps = {
  id: string;
};

type listItem = {
  id: string;
  path: string;
}

const Droppable: React.FC<DroppableProps> = props => {
  const [open, setopen] = useState(false);
  const [list, setlist] = useState<listItem[]>([]);
  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    const node = document.getElementById(data)!.cloneNode(true);
    e.currentTarget.appendChild(node);
    //@ts-ignore
    setlist([...list, {id:node.id, path:node.firstChild!.firstChild!.firstChild!.firstChild!.firstChild.attributes.srcset.value}]);
    //console.dir("LISTA", node!.attributes[0].value);
    console.log("LISTA", list, setlist);
    //@ts-ignore
    console.log(node.firstChild!.firstChild!.firstChild!.firstChild!.firstChild.attributes.srcset.value);
    
  };

  const handleopen = () => {
    setopen(!open);
  };

  const StyledDragDiv = styled.div`
    height: ${open ? "12rem" : "0"};
    background-color: orangered;
    display: flex;
  `;

  return (
    <>
      <StyledDragDiv onDrop={e => drop(e)} onDragOver={e => e.preventDefault()} id="dragDiv">
        {props.children}
        {list.map(mov => (
          <div id={mov.id}>
            <img src={mov.path} alt=""/>
          </div>
        ))}
      </StyledDragDiv>
      <span onClick={handleopen}>+</span>
    </>
  );
};

export default Droppable;