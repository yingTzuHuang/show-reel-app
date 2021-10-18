import { Fragment } from "react";
import Videos from "../components/Videos/Videos";

// Todo: Apply styles
const AllVideos = (props) => {
  return (
    <Fragment>
      <title>All Videos</title>
      <Videos items={props.items} />
    </Fragment>
  );
};

export default AllVideos;
