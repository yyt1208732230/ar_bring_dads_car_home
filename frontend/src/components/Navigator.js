// Laurence Yu, 2022 April
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Card, message, Modal, Button, Space } from "antd";
import { Row, Col } from "antd";
import Animate from "rc-animate";
import QueueAnim from "rc-queue-anim";
import 'antd/dist/antd.css';
import "../css/index.css";
import "../css/carousel3d.css";
//Components
import Carousel3d from "./Carousel3d"
import MenuPanel from "./MenuPanel"
// Imgs
// CustomisationImage source modified from: https://claytonclassics.co.uk/parts-upgrades/
import DriveDadsCarImage from '../imgs/drivedadscar.jpg'
import CollectionImage from '../imgs/quiz_collection.png'
import CustomisationImage from '../imgs/customisation.png'
import DiyImage from '../imgs/diy.png'
import MycarsImage from '../imgs/maycars.png'
const imgWrapper = [
    {
        key: "collection",
        src: CollectionImage,
        title: "Collection",
        btn: "Go Step One!",
        description: "Get your unique elements by taking the fancy quizs about the Great British Car Journey!"
    },
    {
        key: "customisation",
        src: CustomisationImage,
        title: "Customisation",
        btn: "Go Step Two!",
        description: "Use AR to DIY your own unique digital car with your coaster! (Coaster mode)"
    },
    {
        key: "exhibit",
        src: DiyImage,
        title: "Exhibit",
        btn: "Final Step!",
        description: "Share your cars with friends through mobile camera!"
    },
    {
        key: "mycars",
        src: MycarsImage,
        title: "My Cars",
        btn: "Enter",
        description: "Here are all the digital cars you designed!"
    },
];
// const children = imgWrapper.map((item, i) => (
//     <MenuPanel
//         key={i.toString()}
//         info={item || null}
//     // handleMenu={this.props.handleMenu}
//     >
//     </MenuPanel>
// ));
export default class App extends Component {
    constructor(props) {
        console.log("Navigator to show: ", props);
        super(props);
        this.state = {
            show: true,
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
        console.log("menu click")
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
                <div className="carousel-demo-wrapper">
                    <p id="title-menu" key="titleMain">Menu</p>
                    <Carousel3d className="carousel-demo" childMaxLength={4}>
                        {
                            /* children */
                            imgWrapper.map((item, i) => (
                                <MenuPanel
                                    key={i.toString()}
                                    info={item || null}
                                    handleMenu={this.props.handleMenu}
                                ></MenuPanel>
                            ))
                        }
                    </Carousel3d>
                </div>
            </>
        );
    }
}
