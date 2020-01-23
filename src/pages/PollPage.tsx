import React, { useState, useEffect } from "react";
import Droppable from "../components/DnD/Droppable";
import Draggable from "../components/DnD/Draggable";
import styled from "styled-components";
import firebase from "firebase";
import Accordion from "../components/Help/Accordion/Accordion";

const Choose = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin: 1rem;
  }
`;

const Separator = styled.span`
  background-color: #b5a5ab;
  width: 100%;
  height:1px;
  display:inline-block;
  margin: 0 auto;

  &::before{
    content:"";
  }
`;

var dbRefObject = firebase
  .database()
  .ref()
  .child("poll");

type Poll = {
  results: Category[];
};

type Category = {
  topic: string;
  nominations: {
    id: string;
    name: string;
    path: string;
  }[];
};

const PollPage: React.FC = () => {
  const [state, setstate] = useState<Poll>();

  useEffect(() => {
    dbRefObject.on("value", snap => setstate(snap.val()));
  }, []);

  console.log(state);

  return (
    <>
      {state
        ? [].map.call(state.results, (category: Category) => (
            <>
              <Accordion title={category.topic}>
                <Droppable id=""></Droppable>
                <Separator/>
                <Choose>
                  {category.nominations.map((nomination) => (
                    <Draggable id={nomination.id}>
                      <img src={nomination.path} alt={nomination.id} />
                    </Draggable>
                  ))}
                </Choose>
              </Accordion>
            </>
          ))
        : null}
        <button>Submit</button>
    </>
  );
};

export default PollPage;
