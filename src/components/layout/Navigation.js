import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <h1>Show Reels</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Show Reels</Link>
          </li>
          <li>
            <Link to="/all-videos">All Videos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
