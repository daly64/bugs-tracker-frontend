// noinspection ES6CheckImport

import React, {useState} from 'react';
import {Affix, Button, Col, Row, Typography} from "antd";
import style from '../../GeneralStyle.js'
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import {useNavigate} from "react-router-dom";
import FeaturesModal from "../Modals/FeaturesModal.jsx";
import {featuresSearch} from "../../Features/featuresFeatures.js";

const {Title} = Typography
const {homeButton, homeIcon, nav, title} = style

function FeaturesNavBar({id, features}) {
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
                                <Title level={2} style={title}>{features.length} features</Title>
                            </Col>
                        </Row>

                    </Col>
                    <Col span={12}><Search size="large" placeholder="search feature"
                                           onSearch={(value) => featuresSearch(value)}/></Col>
                    <Col span={4}><Button type='default' style={{marginLeft: '1rem'}}
                                          onClick={showModal}
                                          icon={<PlusOutlined/>}>
                        Add New Feature </Button></Col>
                </Row>
            </Affix>
            <FeaturesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} id={id}/>
        </>

    );
}

export default FeaturesNavBar;