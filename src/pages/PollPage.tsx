import React from "react";
import Droppable from "../components/DnD/Droppable";
import Draggable from "../components/DnD/Draggable";


const PollPage: React.FC = () => {
  return (
    <>
      <Droppable id="1"></Droppable>

          <Draggable id="2">
              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"/>
          </Draggable>
          <Draggable id="3">
              <img src="https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg"/>
          </Draggable>
          <Draggable id="4">
              <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"/>
          </Draggable>
          <Draggable id="5">
              <img src="https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"/>
          </Draggable>

    </>
  );
};

export default PollPage;
