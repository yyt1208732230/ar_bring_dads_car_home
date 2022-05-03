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
// Components
import CollectionAR from "./components/CollectionAR";
// react-web-ar
import { AFrameRenderer, Marker } from 'react-web-ar'
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
        };
    }
    componentDidMount() {
    }
    render() {
        <>
            
        </>
    }
}
