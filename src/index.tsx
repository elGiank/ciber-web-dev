import * as React from "react";
import * as ReactDOM from "react-dom";
import 'url-search-params-polyfill';

import { Hello } from "./components/Hello";



ReactDOM.render(
    <Hello compiler="Webpack" framework="React" />,
    document.getElementById("example")
);

