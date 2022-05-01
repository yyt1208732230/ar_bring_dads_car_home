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
const { Header, Content, Footer } = Layout;

export default class App extends Component {
    constructor(props) { //scr, title, description
        console.log("MenuPanel props: ", props);
        super(props);
        this.state = {
            key: this.props.info.key,
            src: this.props.info.src,
            title: this.props.info.title,
            description: this.props.info.description,
            btn: this.props.info.btn,
            show: true,
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
    handleMenu = () => {
        console.log("menu click: " + this.state.key)
        this.props.handleMenu(this.state.key)
    };
    render() {
        return (
            <>
                <div
                    className="img-wrapper"
                    style={{
                        backgroundImage: `url(${this.state.src})`,
                        zIndex: 997,
                    }}
                >
                    <Layout className="layout">
                        <Header className="panel-header">
                            <p className="panel-title">{this.state.title}</p>
                        </Header>
                        <Content style={{height: "335px", backgroundImage: `url(${this.state.src})`, padding: '0 10px' }}>
                            <div style={{height: "284px"}}/>
                            <Button block
                            style={{color: "#262161", fontFamily: "Georgia", fontSize: "20px", fontWeight: "bold"}}
                            type="link"
                            size="large"
                            onClick={this.handleMenu}>
                                {this.state.btn || 'Enter'}
                            </Button>
                        </Content>
                        {/* <Footer style={{ textAlign: 'center' }}>Copyright © 2022 Laurence Yu</Footer> */}
                    </Layout>
                </div>
            </>
        );
    }
}
