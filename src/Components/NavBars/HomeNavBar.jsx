import React, {useState} from 'react';
import {Affix, Button, Col, Row} from "antd";
import style from '../../GeneralStyle.js'
import {BugOutlined, PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import ProjectsModal from "../Modals/ProjectsModal.jsx";
import {useProjectsSearch} from '../../Features/Features.js'

const {icon, nav} = style

function HomeNavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true)
    return (
        <>
            <Affix offsetTop='0'>
                <Row style={nav}>
                    <Col span={8}><Row> <BugOutlined style={icon}/> <h3>Bug Tracker</h3></Row></Col>
                    <Col span={12}><Search size="large" placeholder="search project" onSearch={(value)=>useProjectsSearch(value)}/></Col>
                    <Col span={4}><Button type='default' style={{marginLeft: '1rem'}}
                                          onClick={showModal}
                                          icon={<PlusOutlined/>}>
                        Add New Project </Button></Col>
                </Row>
            </Affix>
            <ProjectsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
}

export default HomeNavBar;