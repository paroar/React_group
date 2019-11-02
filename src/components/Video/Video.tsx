import React from "react";
import { FetchMovie } from "../../utils/types";

const Video: React.FC<FetchMovie> = props => {
  return (
    <>
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
    </>
  );
};

export default Video;