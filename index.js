import _ from "https://dev.jspm.io/npm:lodash@4.17.20/index.js";
import React from "https://dev.jspm.io/npm:react@17.0.1/index.js";
import ReactDOM from "https://dev.jspm.io/npm:react-dom@17.0.1/index.js";

import { multiply } from "./helper.js";

/** 
 * helper.js
 */

console.log("helper.js: multiply(2, 3) = " + multiply(2, 3));

/** 
 * lodash
 */

console.log("lodash: add(1, 2) = " + _.add(1, 2));

/** 
 * React
 */

console.log("React");
console.log(React);

const helperComponent = React.createElement(
    "p",
    { key: "helper-content" },
    "helper.js: multiply(2, 3) = " + multiply(2, 3),
  );

const lodashComponent = React.createElement(
  "p",
  { key: "lodash-content" },
  "lodash: add(1, 2) = " + _.add(1, 2),
);

const reactComponent = React.createElement(
  "pre",
  { key: "react-content" },
  JSON.stringify(lodashComponent, null, 2),
);

const rootComponent = React.createElement(
  "div",
  null,
  [
    React.createElement("h2", { key: "helper-title" }, "helper.js demo:"),
    helperComponent,
    React.createElement("h2", { key: "lodash-title" }, "lodash demo:"),
    lodashComponent,
    React.createElement("h2", { key: "react-title" }, "React & ReactDOM demo:"),
    reactComponent,
  ],
);

console.log("React component", rootComponent);

if (typeof document !== "undefined") {
  ReactDOM.render(
    rootComponent,
    document.getElementById("react-root"),
  );
}
