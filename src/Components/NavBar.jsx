import React, {useState} from 'react';
import {Affix, Button, Col, Form, Input, Modal, Row, Typography} from "antd";
import {homeButton, icon, nav, status, title} from '../GeneralStyle.js'
import {ArrowLeftOutlined, BugOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import TextArea from "antd/es/input/TextArea.js";
import {useNavigate} from "react-router-dom";
import {Else, If, Then} from "react-if";

const {Title} = Typography;

function NavBar({config}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true)
    const handleOk = () => setIsModalOpen(false)
    const handleCancel = () => setIsModalOpen(false)
    const navigate = useNavigate();
    return (
        <>
            <If condition={config.title === 'Project Name'}>
                <Then>
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
                </Then>
                <Else>
                    <Affix offsetTop='0'>
                        <Row style={nav}>
                            <If condition={config.title === 'Bug Tracker'}>
                                <Then>
                                    <Col span={8}><Row> <BugOutlined style={icon}/> <h3>Bug Tracker</h3></Row></Col>
                                </Then>
                                <Else>
                                    <Col span={8}>

                                        <Row>
                                            <Col span={2} style={homeButton}>
                                                <Button type={"link"}
                                                        shape="circle"
                                                        onClick={() => navigate("/product/1")}
                                                        icon={<ArrowLeftOutlined/>}/> </Col>
                                            <Col span={22}>
                                                <Title level={2} style={title}>{config.title}</Title>
                                            </Col>

                                        </Row>

                                    </Col>
                                </Else>
                            </If>

                            <Col span={12}><Search size="large" placeholder={config.searchPlaceholder}/></Col>
                            <Col span={4}><Button type='default'
                                                  onClick={showModal}
                                                  icon={<PlusOutlined/>}>
                                {config.addButton}</Button></Col>
                        </Row>
                    </Affix>
                    <Modal title={config.modalTitle}
                           open={isModalOpen}
                           onOk={handleOk}
                           okText={'Add'}
                           onCancel={handleCancel}>
                        <Form layout={"vertical"}>
                            <Form.Item label={config.inputNameLabel}>
                                <Input placeholder={config.inputNamePlaceholder}/>
                            </Form.Item>
                            <Form.Item label={config.inputDescriptionLabel}>
                                <TextArea rows={4} placeholder={config.inputDescriptionPlaceholder}/>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Else>
            </If>

        </>

    );
}

export default NavBar;