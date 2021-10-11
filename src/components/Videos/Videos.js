import React from "react";
import VideoItem from "./VideoItem";

const Videos = (props) => {
  return (
    <div>
      {props.items.map((video) => {
        return <VideoItem key={video.id} source={video} />;
      })}
    </div>
  );
};

export default Videos;
