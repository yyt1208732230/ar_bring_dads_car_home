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
// import { AFrameRenderer, Marker } from './react-web-ar-fixed/index'
// aframe-react
import { Entity, Scene } from "aframe-react";

const { Header, Content, Footer } = Layout;
const AFRAME = window.AFRAME;

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
    handleCollide = (e) => {
        console.log('Collided!');
    }
    handleClick = () => {
        console.log('Clicked!');
    }
    handlemarkerFound = () => {
        console.log('marker found!');
    }
    shootDistance = () => {
    }
    render() {
        // Note: we used 3X3 barcode for the demostration project, but recommand QR code to unlock the number limitation of bar code. 
        let miniMarker = (
            <Marker markerFound parameters={{ type: 'barcode', value: '11' }}>
                <Entity
                    id="miniMarker"
                    // static-body
                    // dynamic-body
                    gltf-model="/assets/models/ClassicMiniRed.gltf"
                    scale={{ x: 9.3, y: 9.3, z: 9.3 }}
                    position={{ x: -1.25, y: 0, z: -1 }}
                    events={{ distCalLoadM1: this.handleClick }}
                />
            </Marker>
        )
        let mgMarker = (
            <Marker parameters={{ type: 'barcode', value: '7' }}>
                <Entity
                    id="mgMarker"
                    static-body
                    // dynamic-body
                    gltf-model="/assets/models/MGBlack.gltf"
                    scale={{ x: 9.3, y: 9.3, z: 9.3 }}
                    position={{ x: -1.25, y: 0, z: -1 }}
                    events={{ collide: [this.handleCollide] }}
                > </Entity>
            </Marker>
        )
        let austin7Marker = (
            <Marker parameters={{ type: 'barcode', value: '23' }}>
                <Entity
                    id="austin7Marker"
                    static-body
                    // dynamic-body
                    gltf-model="/assets/models/AustinSeven.gltf"
                    scale={{ x: 9.3, y: 9.3, z: 9.3 }}
                    position={{ x: 0, y: 0, z: -1 }}
                    events={{ collide: this.handleCollide }}
                />
            </Marker>
        )
        let metroMarker = (
            <Marker parameters={{ type: 'barcode', value: '8' }}>
                <Entity
                    id="metroMarker"
                    static-body
                    // dynamic-body
                    gltf-model="/assets/models/metroRed.glb"
                    scale={{ x: 1.3, y: 1.3, z: 1.3 }}
                    position={{ x: 0, y: 0, z: -1 }}
                />
            </Marker>
        )
        let trMarker = (
            <Marker parameters={{ type: 'barcode', value: '33' }}>
                <Entity
                    id="trMarker"
                    static-body
                    // dynamic-body
                    gltf-model="/assets/models/TRlightRed.glb"
                    scale={{ x: 0.65, y: 0.65, z: 0.65 }}
                    position={{ x: 0, y: 0, z: -1 }}
                />
            </Marker>
        )
        let answerParkingArea = (
            // plane rotation & position reference with fixed-plane (Non-SLAM): 
            // https://github.com/yyt1208732230/ar_bring_dads_car_home/blob/development_v1/frontend/docs/fixed-plane-collection-answerarea.jpg  
            <Entity
                id="answerParkingArea"
                static-body
                distruler__1="target: #austin7Marker; targetName: Austin-7; questionId: Q1CARBORN"
                distruler__2="target: #miniMarker; targetName: Mini-Red; questionId: Q1CARBORN"
                distruler__3="target: #mgMarker; targetName: MG-Black; questionId: Q1CARBORN"
                geometry={{ primitive: 'plane', width: "5", height: "8.8" }}
                material={{ src: "/assets/models/answerPlane.png", transparent: false, opacity: 0.9 }}
                position={{ x: -5, y: -2.1, z: -15 }}
                rotation={{ x: -67.5, y: 0, z: 0 }}
                events={{ collide: this.handleCollide }}
            />
        )
        let staticPlane = (
            <Entity
                id="staticPlane"
                static-body
                geometry={{ primitive: 'plane', width: "50", height: "20" }}
                material={{ transparent: true, opacity: 0 }}
                position={{ x: 5, y: -7.3, z: -15 }}
                rotation={{ x: -67.5, y: 0, z: 0 }}
                events={{ collide: this.handleCollide }}
            />
        )
        return (
            <>
                {/* Append Markers */}
                {[answerParkingArea, staticPlane]}
                {/* Makers list should be load from the database */}
                {[miniMarker, mgMarker, austin7Marker, metroMarker, trMarker]}
            </>
        );
    }
}
