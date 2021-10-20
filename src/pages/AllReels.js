import { Fragment, useState } from "react";
import React from "react";
import Reels from "../components/Reels/Reels";
import ReelVideos from "../components/Reels/ReelVideos";
import NewReel from "./NewReel";

//Todo: get items for reels from App (server/storage)
let reels = [];

const getReelVideos = (allVideos, reel) => {
  let reelVideos = [];
  allVideos.forEach((video) => {
    if (reel.videoIds.includes(video.id)) {
      reelVideos.push(video);
    }
  });
  return reelVideos;
};
// Todo: Apply styles
const AllReels = (props) => {
  let initialSelectedReelItem = null;
  let initialFilteredVideos = [];
  if (reels.length > 0) {
    initialSelectedReelItem = reels[0];
    initialFilteredVideos = getReelVideos(
      props.videos,
      initialSelectedReelItem
    );
  }
  const [selectedReelItem, setSelectedReelItem] = useState(
    initialSelectedReelItem
  );
  const [filteredVideos, setFilteredVideos] = useState(initialFilteredVideos);
  const [reelItems, setReelItems] = useState(reels);

  const addNewReelHandler = (newReel) => {
    const reelData = {
      ...newReel,
      //Todo: Consider to use other way to generate id
      id: Math.random().toString(),
      videoIds: [],
    };
    // Change items of reels
    setReelItems((previousReels) => {
      return [reelData, ...previousReels];
    });
    setSelectedReelItem();
    setFilteredVideos([]);
  };
  const displayReelVideosHandler = (selectedReel) => {
    const reelVideos = getReelVideos(props.videos, selectedReel);
    setFilteredVideos(reelVideos);
    setSelectedReelItem(selectedReel);
  };

  const removeVideoHandler = (video, reel) => {
    const videoIdIndex = reel.videoIds.indexOf(video.id);

    if (videoIdIndex !== -1) {
      reel.videoIds.splice(videoIdIndex, 1);
    }

    const reels = [...reelItems];
    const resetReels = reels.map((reelItem) =>
      reelItem.id === reel.id
        ? { ...reelItem, videoIds: reel.videoIds }
        : reelItem
    );
    setReelItems(resetReels);

    displayReelVideosHandler(reel);
  };

  return (
    <Fragment>
      <NewReel onAddNewReel={addNewReelHandler} />
      <h1>All Reels</h1>
      {reelItems.length > 0 && (
        <div>
          <Reels
            items={reelItems}
            onSelectReel={displayReelVideosHandler}
            videos={props.videos}
            filteredVideos={filteredVideos}
            onChangeReelVideos={displayReelVideosHandler}
          />
        </div>
      )}
      <div>
        <h2>Reel Videos</h2>
        <ReelVideos
          reel={selectedReelItem}
          items={filteredVideos}
          onRemoveVideo={removeVideoHandler}
        />
      </div>
    </Fragment>
  );
};

export default AllReels;
