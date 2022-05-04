// Laurence Yu, 2022 April
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Card, message, Modal, Button, Space, Image } from "antd";
import { Row, Col, Layout } from "antd";
import { CloseSquareTwoTone, UnlockTwoTone } from "@ant-design/icons";
import Animate from "rc-animate";
import QueueAnim from "rc-queue-anim";
import 'antd/dist/antd.css';
import "../css/index.css";
import "../css/carousel3d.css";
import "../css/menupanel.css";
// Imgs
import birthdayCakeDecal from '../imgs/birthdayCake.png'
import targetRewardImg from '../imgs/targetReward-b.png'
// react-web-ar
import { AFrameRenderer, Marker } from 'react-web-ar'
// aframe-react
import { Entity, Scene } from "aframe-react";
// Models (public)
const env = 'dev'
const demo_url = 'https://yyt1208732230.github.io/Bring-Dads-Car-Home-Demo-Site/'
const mgModelSrc = (env=='local' ?  '' : demo_url) + '/assets/models/MGBlack.gltf'
const miniModelSrc = (env=='local' ?  '' : demo_url) + '/assets/models/ClassicMiniRed.gltf'
const austinModelSrc = (env=='local' ?  '' : demo_url) + '/assets/models/AustinSeven.gltf'
const answerPlaneSrc = (env=='local' ?  '' : demo_url) + '/assets/models/answerPlane.png'
const trModelSrc = (env=='local' ?  '' : demo_url) + '/assets/models/TRlightRed.glb'
const metroModelSrc = (env=='local' ?  '' : demo_url) + '/assets/models/metroRed.glb'
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
    removeAframeUnused = () => {
        let _aText = document.querySelector("#answerText1")
        if (_aText) {
            _aText.parentElement.removeChild(_aText);
        }
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
    handleQuit = () => {
        const key = 'updatable';

        message.loading({ content: 'Going back to my collection...', key });
        setTimeout(() => {
            message.warning({ content: 'Answers not saved.', key, duration: 2 });
            this.removeAframeUnused();
            this.props.handleCollectionProcess('collectionList')
        }, 2000);
    }
    handleReward = () => {
        let answerScore = document.querySelector("#answerScore");
        let currentScore = (answerScore && answerScore.hasAttributes()) ? answerScore.attributes.value.value : -1
        console.log('check reward score: ' + currentScore);

        const key = 'updatable';
        message.loading({ content: 'Checking Answers...', key });

        // score more than 1 - succeed
        if (currentScore == 1) {
            setTimeout(() => {
                message.success({ content: 'Congratulations. Decal collected!', key, duration: 2 });
            }, 1000);
            let next = setTimeout(() => {
                this.removeAframeUnused();
                this.props.handleCollectionProcess('collectionAward')
            }, 2000)
        } else { // score less than 1 - failed
            setTimeout(() => {
                message.warning({ content: 'You almost there!', key, duration: 2 });
            }, 1000);
        }

    }
    render() {
        // Note: we used 3X3 barcode for the demostration project, but recommand QR code to unlock the number limitation of bar code. 
        let miniMarker = (
            <Marker markerFound parameters={{ type: 'barcode', value: '11' }}>
                <Entity
                    id="miniMarker"
                    // static-body
                    // dynamic-body
                    gltf-model={miniModelSrc}
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
                    gltf-model={mgModelSrc}
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
                    gltf-model={austinModelSrc}
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
                    gltf-model={metroModelSrc}
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
                    gltf-model={trModelSrc}
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
                material={{ src: answerPlaneSrc, transparent: false, opacity: 0.9 }}
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
                {/* Question Bar */}
                <Card id="bar-question" bodyStyle={{ padding: '0px 25px 0px 25px' }}>
                    <h2 style={{color: '#262161', fontWeight: '700', fontFamily: 'Georgia', marginTop: '0.5em'}}> Q1: Move ONE little car changed the world and he born in 1920s. </h2>
                </Card>
                {/* <Card
                    id="ard-targetaward"
                    cover={<img alt="reward target" src={targetRewardImg} />}
                >
                </Card> */}
                {/* // style={{ width: '120px', height: '60px' }} */}
                {/* Buttons */}
                <Button
                    id="btn-checkreward"
                    size="default"
                    type="text"
                    onClick={this.handleReward}
                >
                    <UnlockTwoTone twoToneColor="#262161"/> Unlock this Decal
                </Button>
                <Button
                    id="collection-close"
                    size="large"
                    type="text"
                    onClick={this.handleQuit}
                >
                    <CloseSquareTwoTone twoToneColor="#262161" style={{fontSize: '23px', opacity: '0.75'}}/>
                </Button>
                {/* Reward Target */}
                <img id="card-targetaward" alt="reward target" src={targetRewardImg} />
                <img id="card-decal" alt="cake decal April" src={birthdayCakeDecal} />
                <div id="text-decal">
                    <h4>April Cake Decal (Limited Edition)</h4>
                    <h6>NFT: BDCH-0405-GBCJ-ACD-01</h6>
                </div>
                <span id="answerScore" value='0' hidden='true'></span>
                <span id="detecting" value='0' hidden='true'></span>
            </>
        );
    }
}
