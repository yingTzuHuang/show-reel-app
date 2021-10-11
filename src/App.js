import React, { useState } from "react";
import "./App.css";
import data from "./components/data/videos.json";
import AllReels from "./pages/AllReels";
import AllVideos from "./pages/AllVideos";

//Todo: get items for reels from server/storage
let reels = [];

function App() {
  const [reelItems, setReelItems] = useState[reels];
  const addReelHandler = (newReel) => {
    // Change items of reels
    setReelItems((previousReels) => {
      return [newReel, ...previousReels];
    });
  };

  return (
    <div className="App">
      <AllVideos items={data} />
      <AllReels onAddReel={addReelHandler} />
      <NewReel />
    </div>
  );
}

export default App;
