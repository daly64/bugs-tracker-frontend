import React from 'react';
import {Button, Col, Row} from "antd";
import Search from "antd/es/input/Search.js";
import {PlusOutlined} from "@ant-design/icons";

function HomePageNavBar() {
    return (
        <Row className='shadow-md shadow-indigo-500/40 h-12 items-center'>
            <Col span={8}><h1 className='font-mono font-bold text-center text-indigo-500 text-2xl'>Bug Tracker</h1></Col>
            <Col span={12}><Search placeholder="search project"/></Col>
            <Col span={4}  className=' align-middle text-center'><Button icon={<PlusOutlined/>}> Add New Project </Button></Col>
        </Row>
    );
}

export default HomePageNavBar;