import { Fragment, useState } from "react";
import React from "react";
import Reels from "../components/Reels";
import Videos from "../components/Videos";

// Todo: Apply styles
const AllReels = (props) => {
  const [reels, setReels] = useState(props.reels);
  const [filteredVideos, setFilteredVideos] = useState(props.videos);

  const selectReelHandler = (selectedReel) => {
    //Todo: set filteredVideos based on selected reel
  };

  return (
    <Fragment>
      <title>All Reels</title>
      <div>
        <Reels items={reels} onSelectReel={selectReelHandler} />
      </div>
      <div>
        <Videos items={filteredVideos} />
      </div>
    </Fragment>
  );
};

export default AllReels;