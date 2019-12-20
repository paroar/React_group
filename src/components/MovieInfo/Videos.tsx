import React from "react";
import { FetchMovie } from "../../utils/types";

const Videos: React.FC<FetchMovie> = props => {
  if (!props.videos) {
    return null;
  } else {
    return (
      <div className="details--videos">
        {props.videos.results.map(video => (
          <iframe
            width="460"
            height="270"
            frameBorder="0"
            allowFullScreen
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.key}
            key={video.key}
          ></iframe>
        ))}
      </div>
    );
  }
};

export default Videos;
