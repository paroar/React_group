import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Poll from "../../components/Poll";

var dbRefObject = firebase
  .database()
  .ref()
  .child("poll");

type Category = {
  topic: string;
  nominations: {
    id: string;
    name: string;
    path: string;
  }[];
};

const PollContainer: React.FC = () => {
  const [poll, setPoll] = useState<Category[]>();

  useEffect(() => {
    dbRefObject.on("value", snap => setPoll(Object.values(snap.val()).flat()));
  }, []);

  console.log("POLLCONTAINER",poll);
  if (!poll) {
    return <div>Not yet</div>;
  }
  return <Poll poll={poll}/>;
};

export default PollContainer;
