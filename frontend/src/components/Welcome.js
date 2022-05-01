// Laurence Yu, 2022 April
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Card, message, Modal, Button, Space } from "antd";
import { Row, Col } from "antd";
import Animate from "rc-animate";
import QueueAnim from "rc-queue-anim";
import 'antd/dist/antd.css';
import "../css/index.css";
// Imgs
import DriveDadsCarImage from '../imgs/drivedadscar.jpg'
export default class App extends Component {
    constructor(props) {
        console.log("info to show: ", props.props);
        super(props);
        this.state = {
            visible: true,
            show: true,
            title: props.props,
            context: "",
        };
    }
    componentDidMount() {
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    switchCard = () => {
        console.log("start click")
        this.setState({
            show: !this.state.show,
        });
    };
    handleStart = () => {
        console.log('startbox fade')
        // console.log(this.props.props.startbox)
        let startbox = this.state.startbox
        this.props.handleLoginIconWithStartbox(startbox)
    };
    render() {
        return (
            <>
                <Animate
                    transitionName="fade"
                    transitionLeave="true"
                    transitionEnter="true"
                    onEnd = {this.handleStart}
                >
                    {this.state.show ? <div key="w1">
                        <p id="title-large" key="titleMain">Bring Dad's Car Home™ - AR Experience</p>
                        <Card
                            hoverable
                            key="startCard"
                            id="centrepanel"
                            // style={{ "border-radius": "23px" }}
                            cover={<img className="panelbackground" alt="Drive and Bring Dad's Car Home™" src={DriveDadsCarImage} />}
                        >
                            <div id="startbar">
                                <p className="introduction">"Pick a car and keep your story forever". Collect your favourite decoration elements with coasters, customise your digital car and bring it home!</p>
                                <Row>
                                    <Col span={4}>
                                        <Button
                                            id="btn-start"
                                            className="pannelbar-left"
                                            size="large"
                                            type="text"
                                            onClick={this.switchCard}
                                        >START</Button>
                                    </Col>
                                    <Col span={4}>
                                        <Button
                                            id="btn-learnmore"
                                            className="pannelbar-left"
                                            size="large"
                                            type="text"
                                        // onClick={this.switchCard}
                                        >About Us</Button>
                                    </Col>
                                    <Col span={8}></Col>
                                    <Col span={8}>
                                        <p className="text-white copyright-br">Copyright © 2022 Laurence Yu</p>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </div> : null}
                </Animate>
            </>
        );
    }
}
