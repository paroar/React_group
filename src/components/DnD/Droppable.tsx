import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/Auth";
import { RouteComponentProps, withRouter } from "react-router";

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

const Droppable: React.FC<DroppableProps & RouteComponentProps> = props => {
  const [state] = useState(props.voteId);
  const [pick, setPick] = useState({
    id: "",
    path: ""
  });

  //@ts-ignore
  const { currentUser } = useContext(AuthContext);

  const drop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if(!currentUser){
      handleRedirect()
    }
    const data = e.dataTransfer.getData("transfer");
    const node = document.getElementById(data);
    //@ts-ignore
    setPick({ id: node.id, path: node.firstChild.currentSrc });

  };

  const handleRedirect = () => {
    props.history.push({
      pathname: "/user",
      search: `/poll`
    });
  };


  useEffect(() => {
    const update = () => {
      props.handleVote(pick.id, state);
    };
    update();
  }, [pick]);

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

export default withRouter(Droppable);
