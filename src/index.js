import React from "react";
import ReactDOM from "react-dom";
//remember to add the folder of which it is located first (components)
//This is the only file we do that in, since the rest are located in the same folder.
import Planner from "./planner/Planner";

ReactDOM.render(
  <React.StrictMode>
    <Planner />
  </React.StrictMode>,
  document.getElementById("root")
);
/* ReactDOM.render(<Planner />, document.getElementById("root")); */
//Er kommet til "Events" (video nr. 13)
