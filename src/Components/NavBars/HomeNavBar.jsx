import React, {useState} from 'react';
import {Affix, Button, Col, Form, Input, Modal, Row} from "antd";
import style from '../../GeneralStyle.js'
import {BugOutlined, PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import TextArea from "antd/es/input/TextArea.js";

const {icon, nav}=style
function HomeNavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true)
    const handleOk = () => setIsModalOpen(false)
    const handleCancel = () => setIsModalOpen(false)
    return (
        <>
            <Affix offsetTop='0'>
                <Row style={nav}>
                    <Col span={8}><Row> <BugOutlined style={icon}/> <h3>Bug Tracker</h3></Row></Col>
                    <Col span={12}><Search size="large" placeholder="search project"/></Col>
                    <Col span={4}><Button type='default'
                                          onClick={showModal}
                                          icon={<PlusOutlined/>}>
                        Add New Project </Button></Col>
                </Row>
            </Affix>
            <Modal title="New Project"
                   open={isModalOpen}
                   onOk={handleOk}
                   okText={'Add'}
                   onCancel={handleCancel}>
                <Form layout={"vertical"}>
                    <Form.Item label={'Project Name :'}>
                        <Input placeholder="Please input your project Name"/>
                    </Form.Item>
                    <Form.Item label={'Project Description :'}>
                        <TextArea rows={4} placeholder="Please input your project Description"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default HomeNavBar;