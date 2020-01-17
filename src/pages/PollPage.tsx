import React from "react";
import Droppable from "../components/DnD/Droppable";
import Draggable from "../components/DnD/Draggable";
import styled from "styled-components";
import poll from "../assets/poll.json";

const Choose = styled.div`
  background-color: yellowgreen;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  & > * {
    margin: 1rem;
  }
`;

const PollPage: React.FC = () => {
  return (
    <>
      {poll.map(topic => (
        <>
          <Droppable id=""></Droppable>
          <h2>{topic.topic}</h2>
          <Choose>
            {topic.nominations.map(nomination => (
              <Draggable id={nomination.id}>
                <img src={nomination.path} alt={nomination.id}/>
              </Draggable>
            ))}
          </Choose>
        </>
      ))}
    </>
  );
};

export default PollPage;
