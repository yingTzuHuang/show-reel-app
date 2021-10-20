import React from "react";
import AddVideoToReel from "./AddVideoToReel";
import TotalDuration from "../Duration/TotalDuration";

const ReelItem = (props) => {
  const selectReelHandler = () => {
    props.onSelectReel(props.source);
  };

  const addVideoToReelHandler = (video) => {
    const changedReel = props.source;

    if (
      video.standard !== changedReel.standard ||
      video.definition !== changedReel.definition
    ) {
      //Todo: change to error dialog
      return console.log(
        "Video Standard or definition doesn't match the reel's"
      );
    }

    if (changedReel.videoIds.includes(video.id) === false) {
      changedReel.videoIds.push(video.id);
      props.onChangeReelVideos(changedReel);
    } else {
      //Todo: show message that the item already in reels
    }
  };

  return (
    <div className="reelItem">
      <div>
        <label htmlFor="reelName">Name:</label>
        <div>{props.source.name}</div>
      </div>
      <div>
        <label htmlFor="videoStandard">Video Standard:</label>
        <div>{props.source.standard}</div>
      </div>
      <div>
        <label htmlFor="videoDefinition">Video Definition: </label>
        <div>{props.source.definition}</div>
      </div>
      <TotalDuration
        videos={props.filteredVideos}
        standard={props.source.standard}
      />
      <AddVideoToReel
        videos={props.videos}
        onAddToReel={addVideoToReelHandler}
      />
      <button type="button" onClick={selectReelHandler}>
        Show Videos
      </button>
    </div>
  );
};

export default ReelItem;
