import React from "react";
import VideoItem from "../Videos/VideoItem";

const ReelVideoItem = (props) => {
  const removeVideoHandler = () => {
    props.onRemoveVideo(props.source, props.reel);
  };

  return (
    <div>
      <VideoItem source={props.source} />
      <button type="button" onClick={removeVideoHandler}>
        Remove from Reel
      </button>
    </div>
  );
};

export default ReelVideoItem;
