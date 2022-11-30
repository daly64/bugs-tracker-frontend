import React from 'react';
import {Affix, Button, Col, Row} from "antd";
import Search from "antd/es/input/Search.js";
import {BugOutlined, PlusOutlined} from "@ant-design/icons";

const nav = {
    backgroundColor:'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#6366f1',
    fontSize: '1rem',
    boxShadow: '#6366f150 1px 2px',
}
const icon = { fontSize: '2rem', margin:'0 2rem' }


function NavBar() {

    return (
        <Affix offsetTop='0'>
        <Row style={nav}>
            <Col span={8}><Row> <BugOutlined  style={icon} /> <h3>Bug Tracker</h3></Row></Col>
            <Col span={12}><Search size="large" enterButton placeholder="search project"/></Col>
            <Col span={4}><Button type='primary' icon={<PlusOutlined/>}> Add New Project </Button></Col>
        </Row>
        </Affix>
    );
}

export default NavBar;