import React, {useState} from 'react';
import {Form, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea.js";
import {modalAddFeature, modalDescriptionInput, modalTitleInput} from "../../Features/featuresFeatures.js";


function FeaturesModal({isModalOpen, setIsModalOpen, id}) {
    let [feature, setFeature] = useState({title: '', description: '', projectId: id})

    const handleOk = () => {
        modalAddFeature(feature, id)
        setIsModalOpen(false)
        setFeature({title: '', description: '', projectId: id})
    }
    const handleCancel = () => {
        setIsModalOpen(false)
        setFeature({title: '', description: '', projectId: id})
    }

    return (<Modal title="New Feature"
                   open={isModalOpen}
                   onOk={handleOk}
                   okText={'Add'}
                   onCancel={handleCancel}>
        <Form layout={"vertical"}>
            <Form.Item label={'Feature Name :'}>
                <Input placeholder="Please input your feature Name" value={feature.title}
                       onChange={(event) => modalTitleInput(feature, setFeature, event)}
                />
            </Form.Item>
            <Form.Item label={'Feature Description :'}>
                <TextArea rows={4} placeholder="Please input your feature Description" value={feature.description}
                          onChange={(event) => modalDescriptionInput(feature, setFeature, event)}
                />
            </Form.Item>
        </Form>
    </Modal>);
}

export default FeaturesModal;