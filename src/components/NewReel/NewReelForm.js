import React, { useState } from "react";

//Todo: Add styles
const NewReelForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [selectedStandard, setSelectedStandard] = useState("");
  const [selectedDefinition, setSelectedDefinition] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const reelData = {
      name: enteredName,
      standard: selectedStandard,
      definition: selectedDefinition,
    };

    props.onSaveReelData(reelData);

    setEnteredName("");
    setSelectedStandard("");
    setSelectedDefinition("");
  };

  const cancelAddReelHandler = () => {
    setEnteredName("");
    setSelectedStandard("");
    setSelectedDefinition("");
  };

  const standardChangeHandler = (event) => {
    setSelectedStandard(event.target.value);
  };

  const definitionChangeHandler = (event) => {
    setSelectedDefinition(event.target.value);
  };

  //Todo: Change standards & definitions to be dynamic
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name</label>
          <input type="text" value={enteredName} />
        </div>
        <div>
          <label>Standard</label>
          <div>
            <input
              type="radio"
              value="PAL"
              name="standard"
              onChange={standardChangeHandler}
              checked={selectedStandard === "PAL"}
            />
            PAL
            <input
              type="radio"
              value="NTSC"
              name="standard"
              onChange={standardChangeHandler}
              checked={selectedStandard === "NTSC"}
            />
            NTSC
          </div>
        </div>
        <div>
          <label>Definition</label>
          <div>
            <input
              type="radio"
              value="SD"
              name="definition"
              onChange={definitionChangeHandler}
              checked={selectedDefinition === "SD"}
            />{" "}
            SD
            <input
              type="radio"
              value="HD"
              name="definition"
              onChange={definitionChangeHandler}
              checked={selectedDefinition === "HD"}
            />{" "}
            HD
          </div>
        </div>
      </div>
      <div>
        <button type="button" onClick={cancelAddReelHandler}>
          Cancel
        </button>
        <button type="submit">Add Reel</button>
      </div>
    </form>
  );
};

export default NewReelForm;
