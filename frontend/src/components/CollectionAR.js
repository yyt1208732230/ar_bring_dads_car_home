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

// react-web-ar
import { AFrameRenderer, Marker } from 'react-web-ar'
// aframe-react
import { Entity } from "aframe-react";

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
        // Note: we used 3X3 barcode for the demostration project, but recommand QR code to unlock the number limitation of bar code. 
        let miniMarker = (
            <Marker parameters={{ type:'barcode', value:'11'}}>
                <Entity
                    gltf-model="/assets/models/ClassicMiniRed.gltf"
                    scale={{x: 9.3, y: 9.3, z: 9.3}}
                    position={{ x: -1.25, y: 0, z: -1 }}
                />
            </Marker>
        )
        let mgMarker = (
            <Marker parameters={{ type:'barcode', value:'7'}}>
                <Entity
                    gltf-model="/assets/models/MGBlack.gltf"
                    scale={{x: 9.3, y: 9.3, z: 9.3}}
                    position={{ x: -1.25, y: 0, z: -1 }}
                />
            </Marker>
        )
        let austin7Marker = (
            <Marker parameters={{ type:'barcode', value:'23'}}>
                <Entity
                    gltf-model="/assets/models/AustinSeven.gltf"
                    scale={{x: 9.3, y: 9.3, z: 9.3}}
                    position={{ x: -1.25, y: 0, z: -1 }}
                />
            </Marker>
        )
        let answerParkingArea = (
            <Entity primitive='a-sphere' color="green" position="0 -2 -3"/>
        )
        return (
            <>
                {/* Append Markers */}
                {[miniMarker, mgMarker, austin7Marker]}
                {answerParkingArea}
            </>
        );
    }
}
