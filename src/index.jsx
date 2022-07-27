import React from "react";
import ReactDOM from "react-dom/client";
import Tree from "./App";
import explorer from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tree explorer={explorer} />);

