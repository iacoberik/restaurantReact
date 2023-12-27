import React from "react";
import ReactDOM from "react-dom/client";

//React Element => creating an object => On render() to the dom it becomes be HTML

const heading = React.createElement(
  "h1",
  { className: "module_title", id: "heading" },
  "Hello from React Create Element Object"
);

//JSX - JavaScript syntax - easier to create LIKE html syntax or XML - like inside of javascript - JSX IS NOT HTML IN JS  !!!

const jsxHeading = (
  <h1 className="module_title" id="heading">
    Namaste React using JSX
  </h1>
); //Creating an element Object with JSX insted of using core REACT - React.createElement()

const jsxSecondHeading = (
  <h2 className="module_subtitle" id="subtitle">
    Author Iacob Erik-Andrei
  </h2>
);
console.log(heading, jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //Reaplcing the root selector with the heading object

root.render(jsxHeading);
