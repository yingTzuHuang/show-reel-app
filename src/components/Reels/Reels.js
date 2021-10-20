import { Fragment } from "react";
import React from "react";
import ReelItem from "./ReelItem";

const Reels = (props) => {
  const selectReelHandler = (selectedReel) => {
    props.onSelectReel(selectedReel);
  };

  const changeReelVideoHandler = (changedReel) => {
    props.onChangeReelVideos(changedReel);
  };

  return (
    <Fragment>
      {props.items.map((reel) => {
        return (
          <ReelItem
            key={reel.name}
            source={reel}
            videos={props.videos}
            filteredVideos={props.filteredVideos}
            onSelectReel={selectReelHandler}
            onChangeReelVideos={changeReelVideoHandler}
          />
        );
      })}
    </Fragment>
  );
};

export default Reels;
