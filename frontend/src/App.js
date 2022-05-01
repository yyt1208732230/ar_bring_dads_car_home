// Built By lyc, wyw. 2020 June. https://github.com/Congb19/Scope
// Modified and re-designed by Laurence Yu (Yueteng Yu) for Mixed Reality Module at UoN. 2022 April 
// Github: https://github.com/yyt1208732230/ar_bring_dads_car_home
// Don't hesitate to star me on the Github if you like my design!

import React, { Component } from "react";
import ReactDOM from "react-dom";
import yolo from "tfjs-yolo";
import Model from "./Model";
import Info from "./Info";
import { Spin, Space, Modal, Button, Avatar, Image, Menu, Dropdown, notification } from "antd";
import { SearchOutlined, Icon } from "@ant-design/icons";
import { MenuOutlined, SmileTwoTone } from "@ant-design/icons";
import { HomeTwoTone, AppstoreTwoTone, CarTwoTone, InfoCircleTwoTone, EditTwoTone, CameraTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import QueueAnim from "rc-queue-anim";
import "./css/index.css";
// Components
import Welcome from "./components/Welcome";
import Navigator from "./components/Navigator";
import CollectionAR from "./components/CollectionAR";
// Icons
import MenuIcon from './imgs/icon_menu.png'
import SettingIcon from './imgs/icon_setting.png'
import LoginSuccessIcon from './imgs/succeed_user_icon_green.png'
import LoginFailIcon from './imgs/fail_user_icon_red.png'
import MainLogo from './imgs/logo_main.png'
// Menu
// react-web-ar
import { AFrameRenderer, Marker } from 'react-web-ar'
// aframe-react
import { Entity } from "aframe-react";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checking: false,
			loginSucceed: false,
			logo: true,
			startBoxShow: true,
			navigateShow: false,
			collectionShow: false,
			customisationShow: false,
			mycarsShow: false,
			exhibitShow: false,
		};
	}
	componentDidMount() {
	}
	componentWillUnmount() { }
	handleLoginIconWithStartbox = (startBoxShow) => {
		this.setState({
			loginSucceed: !startBoxShow,
			startBoxShow: startBoxShow,
			navigateShow: !startBoxShow, //triger navigator display
		})
	};
	handleMenu = (boxShow) => {
		let navigateShow = true;
		let collectionShow = false;
		let customisationShow = false;
		let mycarsShow = false;
		let exhibitShow = false;
		switch (boxShow) {
			// case "home":
			// 	navigateShow = false;
			// 	collectionShow = true;
			// 	break;
			case "collection":
				navigateShow = false;
				collectionShow = true;
				break;
			case "customisation":
				navigateShow = false;
				customisationShow = true;
				break;
			case "mycars":
				navigateShow = false;
				mycarsShow = true;
				break;
			case "exhibit":
				navigateShow = false;
				exhibitShow = true;
				break;
		}
		this.setState({
			navigateShow: navigateShow,
			collectionShow: collectionShow,
			customisationShow: customisationShow,
			mycarsShow: mycarsShow,
			exhibitShow: exhibitShow,
		})
		console.log("App Level state set: ",
			{ navigateShow, collectionShow, customisationShow, mycarsShow, exhibitShow })
	};
	render() {
		let onClickMenu = (e) => {
			console.log("menu clicked: " + e.key)
			this.handleMenu(e.key)
		};
		let menu = (
			<Menu
				className="menu-text"
				onClick={onClickMenu}
				items={[
					{
						label: "Home",
						key: "home",
						icon: <HomeTwoTone twoToneColor="#262161" />,
					},
					{
						label: "Collection",
						key: "collection",
						icon: <AppstoreTwoTone twoToneColor="#262161" />,
					},
					{
						label: "Customisation (Coaster Digital Car)",
						key: "customisation",
						icon: <EditTwoTone twoToneColor="#262161" />,
					},
					{
						label: "Exhibit",
						key: "exhibit",
						icon: <CameraTwoTone twoToneColor="#262161" />,
					},
					{
						label: "My Cars",
						key: "mycars",
						icon: <CarTwoTone twoToneColor="#262161" />,
					},
					{
						label: "About us",
						key: "aboutus",
						icon: <InfoCircleTwoTone twoToneColor="#262161" />,
					},
				]}
			/>
		)
		return (
			<AFrameRenderer
				arToolKit={{ sourceType: 'webcam', detectionMode:"mono_and_matrix", matrixCodeType:"3x3"}}
			>
				{this.state.collectionShow ? <CollectionAR >
					</CollectionAR> : null}
				<QueueAnim delay={2000} className="queue-simple">
					<div key="m" id="menu">
						<Dropdown overlay={menu} placement="bottomLeft" arrow>
							<Avatar
								key="menu_icon"
								size="large"
								shape="square"
								src={MenuIcon}
							// onClick={this.showHelp}
							/>
						</Dropdown>
					</div>
					<Avatar
						key="settings_icon"
						size="large"
						id="settings"
						shape="square"
						src={SettingIcon}
					// onClick={this.showWeather}
					></Avatar>
					<Avatar
						key="login_icon1"
						size="large"
						id="login"
						shape="square"
						src={LoginFailIcon}
						hidden={this.state.loginSucceed}
					// onClick={this.showWeather}
					></Avatar>
					<Avatar
						key="login_icon2"
						size="large"
						id="login"
						shape="square"
						src={LoginSuccessIcon}
						hidden={!this.state.loginSucceed}
					></Avatar>
					<Image
						key="logo"
						id="logo"
						src={MainLogo}
						hidden={!this.state.logo}
					/>
					<Welcome handleLoginIconWithStartbox={this.handleLoginIconWithStartbox}></Welcome>
					{this.state.navigateShow ?
						<Navigator
							handleLoginIconWithStartbox={this.handleLoginIconWithStartbox}
							handleMenu={this.handleMenu}
						></Navigator> : null}
					<Space size="middle" id="space-loading">
						<Spin
							id="loading"
							size="large"
							spinning={this.state.checking}
						/>
					</Space>
				</QueueAnim>
			</AFrameRenderer>
		);
	}
}
