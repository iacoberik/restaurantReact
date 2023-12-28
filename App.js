import React from "react";
import ReactDOM from "react-dom/client";

//React Element => creating an object => On render() to the dom it becomes be HTML

const heading = React.createElement(
  "h1",
  { className: "module_title", id: "heading" },
  "Hello from React Create Element Object"
);

const headingVariable = (
  <span>
    <br></br>I am an H3 inside of an variale (React element)
  </span>
);

const HeadingComponent = () => {
  return <h1>Namaste from functional component, HeadingComponent!</h1>;
};

//JSX - JavaScript syntax - easier to create LIKE html syntax or XML - like inside of javascript - JSX IS NOT HTML IN JS  !!!
//JSX is transpiled before it reaches the JS Engine (ES6) because Js do not understand JSX => PARCEL is responsabile to manage and use It with BABEL
const JsxHeading = () => (
  <h1 className="module_title" id="heading">
    Namaste React using JSX
  </h1>
); //Creating an element Object with JSX insted of using core REACT -> that will be converted by BABEL to => React.createElement() => intaintJS OBJECT => that will be then be transformed with HTML using render()

const JsxSecondHeading = () => (
  <div>
    <HeadingComponent />
    <JsxHeading />
    <h2 className="module_subtitle" id="subtitle">
      Author Iacob Erik-Andrei
      {headingVariable}
    </h2>
  </div>
);
console.log(JsxSecondHeading, JsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //Reaplcing the root selector with the heading object

root.render(<JsxSecondHeading></JsxSecondHeading>);

//Assignment EP 3 - Laying the foundation

// const headingEx = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "test"),
//   React.createElement("h2", {}, "test"),
//   React.createElement("h3", {}, "test"),
// ]);

// const headingEx = (
//   <div className="title">
//     <h1>Title 1</h1>
//     <h2>Title 2</h2>
//     <h3>Title 3</h3>
//   </div>
// );

// const HeadingExComponent = () => (
//   <div className="title">
//     <h1>Title 1</h1>
//     <h2>Title 2</h2>
//     <h3>Title 3</h3>
//   </div>
// );

// root.render(headingEx);
