import React from "react";
import NewReelForm from "../components/NewReelForm";

// Todo: Apply styles
const NewReel = (props) => {
  const saveReelHandler = (newReel) => {
    //Todo: save new reel data and update AllReels page
  };

  return (
    <Fragment>
      <title>New Reel</title>
      <NewReelForm onSaveReelData={saveReelHandler} />
    </Fragment>
  );
};

export default NewReel;
