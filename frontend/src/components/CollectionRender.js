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
import CollectionAR from "./CollectionAR";
import CollectionAward from "./CollectionAward";
// react-web-ar
import { AFrameRenderer, Marker } from 'react-web-ar'
// aframe-react
import { Entity, Scene } from "aframe-react";

const { Header, Content, Footer } = Layout;
const AFRAME = window.AFRAME;

export default class App extends Component {
    constructor(props) { //scr, title, description
        console.log("CollectRender props: ", props);
        super(props);
        this.state = {
            collectionList: false,
            collectionAr: true,
            collectionAward: false,
        };
    }
    componentDidMount() {
    }
    handleCollectionProcess = (boxShow) => {
        let collectionList = false;
        let collectionAr = false;
        let collectionAward = false;
        switch (boxShow) {
            // case "home":
            // 	navigateShow = false;
            // 	collectionShow = true;
            // 	break;
            case "collectionList":
                collectionList = true;
                break;
            case "collectionAr":
                collectionAr = true;
                break;
            case "collectionAward":
                collectionAward = true;
                break;
            default:
                collectionList = true;
        }
        this.setState({
            collectionList: collectionList,
            collectionAr: collectionAr,
            collectionAward: collectionAward
        })
        console.log("Collection Level state set: ",
            { collectionList, collectionAr, collectionAward })
    };
    render() {
        return (
            <>
                {this.state.collectionList ? <div id="card-collaward">collectionList</div> : null}
                {this.state.collectionAr ? 
                <CollectionAR 
                    handleCollectionProcess={this.handleCollectionProcess}>
                </CollectionAR> : null}
                {this.state.collectionAward ? 
                <CollectionAward 
                    handleMenu={this.props.handleMenu}
                    handleCollectionProcess={this.handleCollectionProcess}
                ></CollectionAward> : null}
            </>
        )
    }
}
