import React, { Fragment } from "react";
import TotalDuration from "./TotalDuration";

const ReelItem = (props) => {
  const [filteredVideos, setFilteredVideos] = useState(props.videos);

  //Todo: Filter video by reel

  return (
    <Fragment>
      <div>
        <label>Name:</label>
        <div>{props.source.name}</div>
      </div>
      <div>
        <label>Video Standard:</label>
        <div>{props.source.description}</div>
      </div>
      <div>
        <label>Video Definition: </label>
        <div>{props.source.standard}</div>
      </div>
      <TotalDuration videos={filteredVideos} />
    </Fragment>
  );
};

export default ReelItem;
