import React, { useState, useContext, useEffect } from "react";
import Droppable from "../components/DnD/Droppable";
import Draggable from "../components/DnD/Draggable";
import styled from "styled-components";
import Accordion from "../components/Accordion/Accordion";
import firebase from "firebase";
import { AuthContext } from "../contexts/Auth";

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

const Poll: React.FC<PollProps> = props => {
  const [vote, setVote] = useState<(String | null)[]>(Array(24).fill(null));

  const handleVote = (voteId: string, state: number) => {
    const newVote = [...vote];
    newVote[state] = voteId;
    setVote(newVote);
  };

  //@ts-ignore
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const handleSubmit = () => {
      var updates = {};

      var updateVote = vote.map(val => (val ? val : "null"));

      //@ts-ignore
      updates[`/poll/votes/` + currentUser.uid] = {
        user: currentUser.email,
        vote: updateVote
      };

      firebase
        .database()
        .ref()
        .update(updates);
    };

    if (vote.find(vot => vot !== null)) {
      handleSubmit();
    }
  }, [vote, currentUser]);

  if (!props.poll) {
    return null;
  } else {
    return (
      <>
        {props.poll.map((category: Category, index) => (
          <Accordion key={category.topic} title={category.topic}>
            <Droppable voteId={index} handleVote={handleVote}></Droppable>
            <Separator />
            <Choose>
              {category.nominations.map(
                (nomination: { id: string; path: string }) => (
                  <Draggable id={nomination.id} key={nomination.id}>
                    <img src={nomination.path} alt={nomination.id} />
                  </Draggable>
                )
              )}
            </Choose>
          </Accordion>
        ))}
      </>
    );
  }
};

export default Poll;
