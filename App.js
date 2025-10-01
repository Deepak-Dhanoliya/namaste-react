import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React!"
);
// React.createElement is just a Javascript object

let root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading);
console.log(heading); // object

// how to create a nested tags using react
/**
 *  <div id='parent'>
 *      <div id='child'>
 *          <h1>I'm h1 tag</h1>
 *      </div>
 *  </div>
 */

let parents = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "child1" }, "I'm h1 tag"),
    React.createElement("h2", { key: "child2" }, "I'm h2 tag"),
  ])
);
root.render(parents);
console.log(parents);
