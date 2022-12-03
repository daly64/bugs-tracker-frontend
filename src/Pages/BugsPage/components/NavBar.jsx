import React from 'react';
import {Affix, Button, Col, Row, Typography} from "antd";
import {nav, title} from '../../../GeneralStyle.js'
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";

const {Title} = Typography;

function NavBar() {

    return (
        <Affix offsetTop='0'>
            <Row style={nav}>
                <Col span={8}><Title level={2} style={title}>10 bugs</Title></Col>
                <Col span={12}><Search size="large"  placeholder="search bug"/></Col>
                <Col span={4}><Button type='default' icon={<PlusOutlined/>}> Add New Bug </Button></Col>
            </Row>
        </Affix>
    );
}

export default NavBar;