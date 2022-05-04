// Built By lyc, wyw. 2020 June. https://github.com/Congb19/Scope
// Modified and re-designed by Laurence Yu (Yueteng Yu) for Mixed Reality Module at UoN. 2022 April 
// Github: https://github.com/yyt1208732230/ar_bring_dads_car_home
// Demo Site: https://yyt1208732230.github.io/Bring-Dads-Car-Home-Demo-Site/
// Don't hesitate to star me on the Github if you like my design!
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./css/index.css";
let app;

app = <App />;
ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById("root")
);

