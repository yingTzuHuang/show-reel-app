import React, { Fragment } from "react";

const getVideoDuration = (video) => {
  //Todo: Calculate duration per video
  //Get video standard, start timecode & end timecode
  //Split timcodes
  //Convert ff to milliseconds = ff * (25fpx or 30 fps) * 40ms)
  //end timecode - start time code
  //return final duration in milliseconds
  return 0;
};

const getDurationText = (videos) => {
  const totalDuration = 0;

  videos.map((video) => {
    totalDuration += getVideoDuration(video);
  });

  //convert duration from milliseconds to format HH:MM:ss:ff
  return "";
};

const TotalDuration = (props) => {
  const durationText = getDurationText(props.videos);

  return (
    <div>
      <label>Total Duration: </label>
      {durationText}
    </div>
  );
};

export default TotalDuration;