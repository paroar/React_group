import React from "react";
import IconMenu from "../Navbar/IconMenu";

type VideosProps = {
  results: {
    key: string;
  }[];
  handleIsOpen: () => void;
}

const Videos: React.FC<VideosProps> = props => {
  if (!props.results) {
    return null;
  } else {
    const vid = props.results[0];
    return (
      <div className="details--videos" onClick={() => props.handleIsOpen()}>
        <div className="video-container">
          <IconMenu isOpen={true} handleIsOpen={() => true}/>
        <iframe
            width="560" height="315"
            frameBorder="0"
            allowFullScreen
            src={`https://www.youtube.com/embed/${vid.key}`}
            title={vid.key}
            key={vid.key}
          ></iframe>
          </div>
      </div>
    );
  }
};

export default Videos;
