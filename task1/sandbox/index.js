import React from "react";
import { render } from "react-dom";

import FunctionalComponent from "./functionalComponent";
import CreateElement from "./createElement";
import ReactComponent from "./reactComponent";
import ReactPureComponent from "./reactPureComponent";

const mentorName = "Denis";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <div id="createElement" />
    <FunctionalComponent mentorName={mentorName} />
    <ReactComponent mentorName={mentorName} />
    <ReactPureComponent mentorName={mentorName} />
  </div>
);

render(<App />, document.getElementById("root"));
render(CreateElement, document.getElementById("createElement"));
