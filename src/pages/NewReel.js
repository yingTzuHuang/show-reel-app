import React, { Fragment } from "react";
import NewReelForm from "../components/NewReel/NewReelForm";

// Todo: Apply styles
const NewReel = (props) => {
  const saveReelHandler = (newReel) => {
    props.onAddNewReel(newReel);
  };

  return (
    <Fragment>
      <h1>New Reel</h1>
      <NewReelForm onSaveReelData={saveReelHandler} />
    </Fragment>
  );
};

export default NewReel;
