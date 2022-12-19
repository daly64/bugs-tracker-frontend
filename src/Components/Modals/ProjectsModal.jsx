import React, {useState} from 'react';
import {Form, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea.js";
import {modalAddProject, modalDescriptionInput, modalNameInput} from "../../Features/projectsFeatures.js";

function ProjectsModal({isModalOpen, setIsModalOpen}) {
    let [project, setProject] = useState({id: Date.now(), name: '', description: ''})
    const handleOk = () => {
        modalAddProject(project)
        setIsModalOpen(false)
        setProject({name: '', description: ''})
    }
    const handleCancel = () => {
        setIsModalOpen(false)
        setProject({name: '', description: ''})
    }
    return (
        <Modal title="New Project"
               open={isModalOpen}
               onOk={handleOk}
               okText={'Add'}
               onCancel={handleCancel}>
            <Form layout={"vertical"}>
                <Form.Item label={'Project Name :'}>
                    <Input placeholder="Please input your project Name" value={project.name}
                           onChange={(event) => modalNameInput(project, setProject, event)}/>

                </Form.Item>
                <Form.Item label={'Project Description :'}>
                    <TextArea rows={4} placeholder="Please input your project Description" value={project.description}
                              onChange={(event) => modalDescriptionInput(project, setProject, event)}/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ProjectsModal;