import React from "react";
import TimeCode from "./TimeCode";

const convertTimeCodeToFrames = (timeCode, framePerSecond) => {
  const timeCodeArr = timeCode.split(":");
  const totalFrames =
    +timeCodeArr[0] * 60 * 60 * framePerSecond +
    +timeCodeArr[1] * 60 * framePerSecond +
    +timeCodeArr[2] * framePerSecond +
    +timeCodeArr[3];

  return totalFrames;
};
//Todo: Extract standard condition handling outside this file
const getVideoDuration = (video, standard) => {
  const framePerSecond = standard === "PAL" ? 25 : 30;

  //Get video standard, start timecode & end timecode
  //Split timcodes and convert them to frames
  const startTimeTotalFrames = convertTimeCodeToFrames(
    video.startTimecode,
    framePerSecond
  );

  const endTimeTotalFrames = convertTimeCodeToFrames(
    video.endTimecode,
    framePerSecond
  );

  //Convert ff to milliseconds = ff * (25fpx or 30 fps) * 40ms)
  //end timecode - start time code
  //return final duration in frames
  return endTimeTotalFrames - startTimeTotalFrames;
};

const TotalDuration = (props) => {
  let totalDuration = 0;

  props.videos.forEach((video) => {
    totalDuration += getVideoDuration(video, props.standard);
  });

  return (
    <div>
      Total Duration:
      {<TimeCode duration={totalDuration} standard={props.standard} />}
    </div>
  );
};

export default TotalDuration;
