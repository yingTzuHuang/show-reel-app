import React from "react";

const padLeadiingZero = (number, size) => {
  let finalText = number.toString();
  while (finalText.length < size) {
    finalText = "0" + finalText;
  }
  return finalText;
};

const TimeCode = (props) => {
  const reelStandard = props.standard;
  //Todo: Extract standard condition handling outside this file
  const framePerSec = reelStandard === "PAL" ? 25 : 30;
  // Todo: Handle props.standard is neither "PAL" nor "NTSC"
  const totalFrames = +props.duration;
  const ff = Math.floor(totalFrames % framePerSec);
  const ffText = padLeadiingZero(ff, 2);
  // Convert totalFrames to seconds = TotalFrames divided by framePerSec.
  const ss = Math.floor((totalFrames / framePerSec) % 60);
  const ssText = padLeadiingZero(ss, 2);
  // Convert totalFrames to minutes = TotalFrames divided by frames per minute.
  const mm = Math.floor((totalFrames / (framePerSec * 60)) % 60);
  const mmText = padLeadiingZero(mm, 2);
  // Convert totalFrames to hours = TotalFrame divided by frames per hour which is (60 * 60 * framePerSec)
  const hh = Math.floor(totalFrames / (60 * 60 * framePerSec));
  const hhText = padLeadiingZero(hh, 2);

  return <p>{hhText + ":" + mmText + ":" + ssText + ":" + ffText}</p>;
};

export default TimeCode;
