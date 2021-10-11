import React, { Fragment } from "react";
import classes from "./VideoItem.module.css";

const VideoItem = (props) => {
  return (
    <Fragment>
      <div>
        <h2 className={classes.videoName}>{props.source.name}</h2>
      </div>
      <div>
        <label>Descritpion:</label>
        {props.source.description}
      </div>
      <div>
        <label>Standard: </label>
        {props.source.standard}
      </div>
      <div>
        <label>Definition:</label>
        {props.source.definition}
      </div>
      <div>
        <label>Start Timecode:</label>
        {props.source.startTimecode}
      </div>
      <div>
        <label>End Timecode:</label>
        {props.source.endTimecode}
      </div>
    </Fragment>
  );
};

export default VideoItem;
