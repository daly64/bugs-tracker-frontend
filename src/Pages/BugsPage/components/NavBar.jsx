import React, {useState} from 'react';
import {Affix, Button, Col, Form, Input, Modal, Row, Typography} from "antd";
import {nav, title} from '../../../GeneralStyle.js'
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import TextArea from "antd/es/input/TextArea.js";

const {Title} = Typography;

function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true)
    const handleOk = () => setIsModalOpen(false)
    const handleCancel = () => setIsModalOpen(false)

    return (
        <>
            <Affix offsetTop='0'>
                <Row style={nav}>
                    <Col span={8}><Title level={2} style={title}>10 bugs</Title></Col>
                    <Col span={12}><Search size="large" placeholder="search bug"/></Col>
                    <Col span={4}><Button type='default'
                                          onClick={showModal}
                                          icon={<PlusOutlined/>}>
                        Add New Bug </Button></Col>
                </Row>
            </Affix>
            <Modal title="New Bug"
                   open={isModalOpen}
                   onOk={handleOk}
                   okText={'Add'}
                   onCancel={handleCancel}>
                <Form layout={"vertical"}>
                    <Form.Item label={'Bug Name :'}>
                        <Input placeholder="Please input your bug Name"/>
                    </Form.Item>
                    <Form.Item label={'Bug Description :'}>
                        <TextArea rows={4} placeholder="Please input your bug Description"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    );
}

export default NavBar;