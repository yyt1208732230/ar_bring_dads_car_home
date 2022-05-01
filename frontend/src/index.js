// Powered By lyc, wyw
// 2020/6
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import * as serviceWorker from "./serviceWorker";
import "./css/index.css";
let app;

app = <App />;
ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
