// Laurence Yu, 2022 April
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Card, message, Modal, Button, Space } from "antd";
import { Row, Col, Layout } from "antd";
import Animate from "rc-animate";
import QueueAnim from "rc-queue-anim";
import 'antd/dist/antd.css';
import "../css/index.css";
import "../css/carousel3d.css";
import "../css/menupanel.css";
// Models
// const AustinSevenGlft = "./ars/AustinSeven.gltf";
// const ClassicMiniRedGlft = "./ars/ClassicMiniRed.gltf";
// const MGBlackGlft = "./ars/MGBlack.gltf";
import AustinSevenGlft from "../ars/objs/AustinSeven.gltf";
import ClassicMiniRedGlft from "../ars/objs/ClassicMiniRed.gltf";
import MGBlackGlft from "../ars/objs/MGBlack.gltf";
const { Header, Content, Footer } = Layout;

export default class App extends Component {
    constructor(props) { //scr, title, description
        console.log("CollectAR props: ", props);
        super(props);
        this.state = {
            // key: this.props.info.key,
            // src: this.props.info.src,
            // title: this.props.info.title,
            // description: this.props.info.description,
            // btn: this.props.info.btn,
            // show: true,
        };
    }
    componentDidMount() {
    }
    // handleStart = () => {
    //     console.log('startbox fade')
    //     // console.log(this.props.props.startbox)
    //     let startbox = this.state.startbox
    //     this.props.handleLoginIconWithStartbox(startbox)
    // };
    // handleMenu = () => {
    //     console.log("menu click: " + this.state.key)
    //     this.props.handleMenu(this.state.key)
    // };
    render() {
        let makerRender = (
            <>
                {/* <a-assets>
                    <a-asset-item id="animated-asset-austin7" src={AustinSevenGlft}></a-asset-item>
                    <a-asset-item id="animated-asset-mgblack" src={MGBlackGlft}></a-asset-item>
                    <a-asset-item id="animated-asset-minired" src={ClassicMiniRedGlft}></a-asset-item>
                </a-assets> */}
                <a-marker id="mgmarker" key="222" type='barcode' value='7'>
                    <a-box position='0 0.5 0' color="yellow"></a-box>
                </a-marker>
                {/* <a-marker key="mg" type='barcode' value='7' src={MGBlackGlft}>
                    <a-entity
                        gltf-model="#animated-asset-mgblack"
                        scale="9.3 9.3 9.3"
                        position="-1.25 0 -1">
                    </a-entity>
                </a-marker> */}
                <a-marker key="mini" type='barcode' value='11' src={ClassicMiniRedGlft}>
                    <a-entity
                        gltf-model="#animated-asset-minired"
                        scale="9.3 9.3 9.3"
                        position="-1.25 0 1"
                        rotation="0 180 0">
                    </a-entity>
                </a-marker>
                <a-marker key="austin7" type='barcode' value='23' src={AustinSevenGlft}>
                    <a-entity
                        gltf-model="#animated-asset-austin7"
                        scale="9.3 9.3 9.3"
                        position="-1.25 0 -1">
                    </a-entity>
                </a-marker>
                <a-entity camera key="plane"></a-entity>	
            </>
        );
        let mgRender = (<a-entity
            gltf-model="animated-asset-mgblack"
            // gltf-model={MGBlackGlft}
            scale="9.3 9.3 9.3"
            position="-1.25 0 -1"
            rotation="0 180 0"
        ></a-entity>)
        let miniRender = (<a-entity
            gltf-model="animated-asset-minired"
            // gltf-model={ClassicMiniRedGlft}
            scale="9.3 9.3 9.3"
            position="-1.25 0 1"
            rotation="0 180 0"
        ></a-entity>)
        let austinRender = (<a-entity
            gltf-model="animated-asset-austin7"
            // gltf-model={AustinSevenGlft}
            scale="9.3 9.3 9.3"
            position="-1.25 0 -1"
        ></a-entity>)
        let asceneRender = (
            <a-assets>
				<a-asset-item id="animated-asset-austin7" src="AustinSeven.gltf"></a-asset-item>
				<a-asset-item id="animated-asset-mgblack" src="MGBlack.gltf"></a-asset-item>
				<a-asset-item id="animated-asset-minired" src="ClassicMiniRed.gltf"></a-asset-item>
			</a-assets>
        )
        let rerenderEntity = () => {
            ReactDOM.render(<div></div>, document.getElementById("mgMarker"));
            ReactDOM.render(
                mgRender,
                document.getElementById("mgMarker")
            )
        }
        return (
            <>
                {rerenderEntity()}
                {/* {ReactDOM.render(<div></div>, document.getElementById("mgMarker"))} */}
                {/* {ReactDOM.render(<div></div>, document.getElementById("minimarker"))}
                {ReactDOM.render(<div></div>, document.getElementById("austinmarker"))} */}
                {/* {
                ReactDOM.render(
                    mgRender,
                    document.getElementById("mgMarker")
                )} */}
                {/* {
                ReactDOM.render(
                    miniRender,
                    document.getElementById("minimarker")
                )} */}
                {/* {
                ReactDOM.render(
                    austinRender,
                    document.getElementById("austinmarker")
                )} */}
            </>
        );
    }
}
