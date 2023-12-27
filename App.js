import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I`m h1 tagggggg"),
    React.createElement("h2", { id: "heading-two" }, "I`m h2 tag"),
  ]),
  React.createElement("div", { id: "child-two" }, [
    React.createElement("h1", { id: "heading" }, "I`m h1 tag"),
    React.createElement("h2", { id: "heading-two" }, "I`m h2 tag"),
  ]),
]);

console.log(parent); // parent variable is an Object that react converts into html

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from REACT!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
