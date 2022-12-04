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
                <Col span={8}><Title level={2} style={title}>12 features</Title></Col>
                <Col span={12}><Search size="large"  placeholder="search feature"/></Col>
                <Col span={4}><Button type='default'
                                      onClick={showModal}
                                      icon={<PlusOutlined/>}>
                    Add New Feature </Button></Col>
            </Row>
        </Affix>
            <Modal title="New Feature"
                   open={isModalOpen}
                   onOk={handleOk}
                   okText={'Add'}
                   onCancel={handleCancel}>
                <Form layout={"vertical"}>
                    <Form.Item label={'Feature Name :'}>
                        <Input placeholder="Please input your feature Name"/>
                    </Form.Item>
                    <Form.Item label={'Feature Description :'}>
                        <TextArea rows={4} placeholder="Please input your feature Description"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    );
}

export default NavBar;