import React from 'react';
import {Affix, Button, Col, Row, Typography} from "antd";
import {nav, status, title} from '../../../GeneralStyle.js'
import {EditOutlined} from "@ant-design/icons";

const {Title} = Typography;

function NavBar() {

    return (
        <Affix offsetTop='0'>
            <Row style={nav}>
                <Col span={8}><Title editable level={2} style={title}>Project Name</Title></Col>
                <Col span={16} style={{textAlign: 'end', paddingRight: '4rem'}}>
                    <Title level={4} type="success" style={status}>In Development <Button type='text'
                                                                                          icon={<EditOutlined
                                                                                              style={{color: "green"}}/>}/></Title>

                </Col>
            </Row>
        </Affix>
    );
}

export default NavBar;