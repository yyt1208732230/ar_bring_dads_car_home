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
import { Entity, Scene } from "aframe-react";

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
        // ReactDOM.render(
        //     AFRAME.registerComponent('markerhandler', {
        //         init: function () {
        //         this.el.sceneEl.addEventListener('markerFound', () => {
        //             window.location = 'https://www.google.com/';
        //         })
        //         }
        //     })
        // )
    }
    handleCollide = (e) => {
        console.log('Collided!');
    }
    handleClick = () => {
        console.log('Clicked!');
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
                    id="miniMarker"
                    static-body
                    // dynamic-body
                    gltf-model="/assets/models/ClassicMiniRed.gltf"
                    scale={{x: 9.3, y: 9.3, z: 9.3}}
                    position={{ x: -1.25, y: 0, z: -1 }}
                    events={{collide: () => {console.log('collided!!!')}}}
                />
            </Marker>
        )
        let mgMarker = (
            <Marker parameters={{ type:'barcode', value:'7'}}>
                <Entity
                    id="mgMarker"
                    static-body
                    gltf-model="/assets/models/MGBlack.gltf"
                    scale={{x: 9.3, y: 9.3, z: 9.3}}
                    position={{ x: -1.25, y: 0, z: -1 }}
                    events={{collide: [this.handleCollide]}}
                > </Entity>
                {/* <Entity
                    dynamic-body
                    gltf-model="/assets/models/MGBlack.gltf"
                    scale={{x: 5, y: 5, z: 5}}
                    position={{ x: -1, y: 3, z: -1 }}
                    mass="1000" velocity="0 0 0"
                    events={{collide: [this.handleCollide]}}
                > </Entity> */}
                {/* <a-box static-body
                position={{ x: 0, y: 0, z: 0 }}
                log="Hello, Box!"></a-box> */}
            </Marker>
        )
        let austin7Marker = (
            <Marker parameters={{ type:'barcode', value:'23'}}>
                <Entity
                    id="austin7Marker"
                    static-body
                    // dynamic-body
                    gltf-model="/assets/models/AustinSeven.gltf"
                    scale={{x: 9.3, y: 9.3, z: 9.3}}
                    position={{ x: 0, y: 0, z: -1 }}
                    events={{collide: this.handleCollide}}
                />
                {/* <Entity 
                    static-body
                    geometry={{primitive: 'plane', width: "3", height: "3"}} 
                    material={{transparent: false, opacity: 0.9}}
                    scale={{x: 3, y: 3, z: 3}}
                    rotation={{x: -90, y: 0, z:0}}
                    // events={{collide: this.handleCollide}}
                /> */}
            </Marker>
        )
        let answerParkingArea = (
            // plane rotation & position reference with fixed-plane (Non-SLAM): 
            // https://github.com/yyt1208732230/ar_bring_dads_car_home/blob/development_v1/frontend/docs/fixed-plane-collection-answerarea.jpg  
            <Entity 
                static-body
                geometry={{primitive: 'plane', width: "5", height: "8.8"}} 
                material={{src: "/assets/models/answerPlane.png", transparent: false, opacity: 0.9}}
                position={{x: -5, y: -2.1, z: -15}}
                rotation={{x: -67.5, y: 0, z:0}}
                events={{collide: this.handleCollide}}
            />
        )
        return (
            <>
                {/* Append Markers */}
                {answerParkingArea}
                {[miniMarker, mgMarker, austin7Marker]}
            </>
        );
    }
}
