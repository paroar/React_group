import React from "react";
import Droppable from "../components/DnD/Droppable";
import Draggable from "../components/DnD/Draggable";
import styled from "styled-components";
import Accordion from "..//components/Help/Accordion/Accordion";

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
  height: 1px;
  display: inline-block;
  margin: 0 auto;

  &::before {
    content: "";
  }
`;

type PollProps = {
  poll: Category[] | undefined;
};

type Category = {
  topic: string;
  nominations: {
    id: string;
    name: string;
    path: string;
  }[];
};

//@ts-ignore
const Poll: React.FC<PollProps> = props => {
  if (!props.poll) {
    return null;
  } else {
    return (
      <>
        {props.poll.map((category: Category) => (
          <Accordion title={category.topic}>
            <Droppable id=""></Droppable>
            <Separator />
            <Choose>
              {category.nominations.map(nomination => (
                <Draggable id={nomination.id}>
                  <img src={nomination.path} alt={nomination.id} />
                </Draggable>
              ))}
            </Choose>
          </Accordion>
        ))}

        <button>Submit</button>
      </>
    );
  }
};

export default Poll;
