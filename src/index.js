import React from "react";
import ReactDom from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";

ReactDom.render(<Counters />, document.getElementById("root"));
serviceWorker.unregister();
