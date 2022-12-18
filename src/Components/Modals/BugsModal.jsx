import React, {useState} from 'react';
import {Form, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea.js";
import {modalAddBug, modalDescriptionInput, modalTitleInput} from "../../Features/bugsFeatures.js";

function BugsModal({isModalOpen, setIsModalOpen,id}) {
    let [bug, setBug] = useState({title: '', description: '', projectId:id})

    const handleOk = () => {
        modalAddBug(bug,id)
        setIsModalOpen(false)
        setBug({title: '', description: '', projectId:id})
    }
    const handleCancel = () => {
        setIsModalOpen(false)
        setBug({title: '', description: '', projectId:id})
    }

    return (
        <Modal title="New Bug"
               open={isModalOpen}
               onOk={handleOk}
               okText={'Add'}
               onCancel={handleCancel}>
            <Form layout={"vertical"}>
                <Form.Item label={'Bug Name :'}>
                    <Input placeholder="Please input your bug Name" value={bug.title}
                           onChange={(event) => modalTitleInput(bug, setBug, event)}
                    />
                </Form.Item>
                <Form.Item label={'Bug Description :'}>
                    <TextArea rows={4} placeholder="Please input your bug Description" value={bug.description}
                              onChange={(event) => modalDescriptionInput(bug, setBug, event)}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default BugsModal;