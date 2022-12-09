import React from 'react';
import {Form, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea.js";

function ProjectsModal({isModalOpen, setIsModalOpen}) {

    const handleOk = () => setIsModalOpen(false)
    const handleCancel = () => setIsModalOpen(false)
    return (
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
    );
}

export default ProjectsModal;