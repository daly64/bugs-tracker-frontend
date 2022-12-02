import React from 'react';
import {Affix, Button, Col, Row} from "antd";
import Search from "antd/es/input/Search.js";
import {BugOutlined, PlusOutlined} from "@ant-design/icons";
import {nav,icon} from '../../../GeneralStyle.js'



function NavBar() {

    return (
        <Affix offsetTop='0'>
        <Row style={nav}>
            <Col span={8}><Row> <BugOutlined  style={icon} /> <h3>Bug Tracker</h3></Row></Col>
            {/*enterButton*/}
            <Col span={12}><Search size="large"  placeholder="search project"/></Col>
            <Col span={4}><Button type='primary' icon={<PlusOutlined/>}> Add New Project </Button></Col>
        </Row>
        </Affix>
    );
}

export default NavBar;