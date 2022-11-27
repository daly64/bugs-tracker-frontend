import React from 'react';
import {Button, Col, Row} from "antd";
import Search from "antd/es/input/Search.js";
import {PlusOutlined} from "@ant-design/icons";


const Style = {
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        // backgroundColor: 'orange',
    },
    navBar: {
        // backgroundColor: 'lightblue',
        height: '10%',
        textAlign: 'center',
        alignItems: 'center',
        boxShadow: '1px 1px #d9d9d9'

    },
}
const {root, navBar} = Style

function App() {
    return (
        <>
            <Col style={root}>
                <Row style={navBar}>
                    <Col span={8}><h3>Bug Tracker</h3></Col>
                    <Col span={12}><Search placeholder="search project"/></Col>
                    <Col span={4}><Button icon={<PlusOutlined/>}> Add New Project </Button></Col>
                </Row>
            </Col>
        </>

    )
}

export default App