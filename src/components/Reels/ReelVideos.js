import React from "react";
import ReelVideoItem from "./ReelVideoItem";

const ReelVideos = (props) => {
  const removeVideoHandler = (video, reel) => {
    props.onRemoveVideo(video, reel);
  };
  return (
    <div>
      {props.items.map((video) => {
        return (
          <ReelVideoItem
            reel={props.reel}
            key={video.id}
            source={video}
            onRemoveVideo={removeVideoHandler}
          />
        );
      })}
    </div>
  );
};

export default ReelVideos;
