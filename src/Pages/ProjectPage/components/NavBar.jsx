import React from 'react';
import {Affix, Button, Col, Row, Typography} from "antd";
import {homeButton, nav, status, title} from '../../../GeneralStyle.js'
import {ArrowLeftOutlined, EditOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const {Title} = Typography;

function NavBar() {
    const navigate = useNavigate();
    return (
        <Affix offsetTop='0'>
            <Row style={nav}>
                <Col span={8}>
                    <Row>
                        <Col span={2} style={homeButton}>
                            <Button type={"link"}
                                    shape="circle"
                                    onClick={() => navigate("/")}
                                    icon={<ArrowLeftOutlined/>}/> </Col>
                        <Col span={22}><Title editable level={3} style={title}>Project Name</Title></Col>

                    </Row>
                </Col>

                <Col span={16} style={{textAlign: 'end', paddingRight: '4rem'}}>
                    <Title level={4} type="success" style={status}>In Development
                        <Button type='text'

                                icon={<EditOutlined style={{color: "green"}}/>}/>
                    </Title>

                </Col>
            </Row>
        </Affix>
    );
}

export default NavBar;