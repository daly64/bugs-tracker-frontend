// noinspection ES6CheckImport

import React, {useState} from 'react';
import {Affix, Button, Col, Row, Typography} from "antd";
import style from '../../GeneralStyle.js'
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import {useNavigate} from "react-router-dom";
import BugsModal from "../Modals/BugsModal.jsx";
import {bugsSearch} from "../../Features/bugsFeatures.js";

const {homeButton, homeIcon, nav, title} = style
const {Title} = Typography;

function BugsNavBar({id, bugs}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true)

    const navigate = useNavigate();
    return (
        <>
            <Affix offsetTop='0'>
                <Row style={nav}>
                    <Col span={8}>

                        <Row>
                            <Col span={2} style={homeButton}>
                                <Button type={"link"}
                                        shape="circle"
                                        onClick={() => navigate(`/product/${id}`)}
                                        icon={<ArrowLeftOutlined style={homeIcon}/>}/> </Col>
                            <Col span={22}>
                                <Title level={2} style={title}>{bugs.length} bugs</Title>
                            </Col>

                        </Row>

                    </Col>
                    <Col span={12}><Search size="large" placeholder="search bug"
                                           onSearch={(value) => bugsSearch(value)}/></Col>
                    <Col span={4}><Button type='default'
                                          onClick={showModal}
                                          icon={<PlusOutlined/>}>
                        Add New Bug </Button></Col>
                </Row>
            </Affix>
            <BugsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} id={id}/>
        </>

    );
}

export default BugsNavBar;