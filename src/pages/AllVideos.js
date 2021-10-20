import { Fragment } from "react";
import Videos from "../components/Videos/Videos";

// Todo: Apply styles
const AllVideos = (props) => {
  return (
    <Fragment>
      <h1>All Videos</h1>
      <Videos items={props.items} />
    </Fragment>
  );
};

export default AllVideos;
