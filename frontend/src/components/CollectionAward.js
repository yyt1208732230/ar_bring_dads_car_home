// Laurence Yu, 2022 April
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Card, message, Modal, Button, Space } from "antd";
import { Row, Col, Layout } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Animate from "rc-animate";
import QueueAnim from "rc-queue-anim";
import 'antd/dist/antd.css';
import "../css/index.css";
// Imgs
import birthdayCakeDecal from '../imgs/birthdayCake.png'
// react-web-ar
import { AFrameRenderer, Marker } from 'react-web-ar'
// aframe-react
import { Entity, Scene } from "aframe-react";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const AFRAME = window.AFRAME;

export default class App extends Component {
    constructor(props) { //scr, title, description
        console.log("CollectAward props: ", props);
        super(props);
        this.state = {
            btnBack: false,
        };
    }
    componentDidMount() {
    }
    handleMenu = () => {
        console.log("award close click")
        // Return to meun after close
        this.props.handleMenu('menu')
        // Return to collection after close
        // this.props.handleCollectionProcess('collectionList')
    };
    render() {
        return (
            <>
                <Button
                    id="card-close"
                    // size="small"
                    type="text"
                    onClick={this.handleMenu}
                >
                    <CloseOutlined />
                </Button>
                <Card
                    id="card-collaward"
                    hoverable
                    cover={<img alt="awarded" src={birthdayCakeDecal} />}
                >
                    <Meta
                        title="Congratulations!!"
                        description="A limited edition cake decal only for April. You can only get this decal in the Cafe area of the Great British Journey museum!"
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Georgia',
                            color: '#262121'
                        }}
                    />
                </Card>
            </>
        )
    }
}
