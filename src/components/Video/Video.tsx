import React from "react";
import { FetchMovie } from "../../utils/types";

const Video: React.FC<FetchMovie> = props => {
  return (
    <div className="videos">
      {props.videos.results.map(video => (
        <iframe
          width="420"
          height="315"
          frameBorder="0"
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.key}
          key={video.key}
        ></iframe>
      ))}
    </div>
  );
};

export default Video;
