import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import Root from "./Root";
import './styles/typography/typography_scheme.scss';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
