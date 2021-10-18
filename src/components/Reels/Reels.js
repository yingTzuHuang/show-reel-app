import { Fragment } from "react";
import React from "react";
import ReelItem from "./ReelItem";

const Reels = (props) => {
  return (
    <Fragment>
      {props.items.map((reel) => {
        return <ReelItem key={reel.name} source={reel} videos={props.videos} />;
      })}
    </Fragment>
  );
};

export default Reels;
