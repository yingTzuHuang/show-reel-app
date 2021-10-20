import React, { useState } from "react";

const AddVideoToReel = (props) => {
  const [selectedVideoId, setSelectedVideoId] = useState(
    props.videos.length > 0 ? props.videos[0].id : null
  );

  const selectVideoHandler = (event) => {
    setSelectedVideoId(event.target.value);
  };

  const addToReelHandler = () => {
    props.onAddToReel(
      props.videos.find((video) => video.id === +selectedVideoId)
    );
  };

  const videoList = props.videos.map((video) => {
    return (
      <option key={video.id} value={video.id}>
        {video.name}
      </option>
    );
  });

  return (
    <div>
      <select value={selectedVideoId} onChange={selectVideoHandler}>
        {videoList}
      </select>
      <button type="button" onClick={addToReelHandler}>
        Add to Reel
      </button>
    </div>
  );
};

export default AddVideoToReel;
