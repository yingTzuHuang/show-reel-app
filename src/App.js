import React from "react";
import "./App.css";
import data from "./components/data/videos.json";
import { Route, Switch } from "react-router-dom";
import AllReels from "./pages/AllReels";
import AllVideos from "./pages/AllVideos";

import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <AllReels videos={data} />
        </Route>
        <Route path="/all-videos">
          <AllVideos items={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
