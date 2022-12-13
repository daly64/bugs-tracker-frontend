import React from 'react';
import {Affix, Button, Col, Row, Typography} from "antd";
import style from '../../GeneralStyle.js'
import {ArrowLeftOutlined, EditOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import {getProject} from "../../Features/projectsFeatures.js";

const {homeButton, homeIcon, nav, status, title}=style
const {Title} = Typography;

function ProjectNavBar() {
    const navigate = useNavigate();
    let {id} = useParams();
    let project = getProject(id)
    return (
        <Affix offsetTop='0'>
            <Row style={nav}>
                <Col span={8}>
                    <Row>
                        <Col span={2} style={homeButton}>
                            <Button type={"link"}
                                    shape="circle"
                                    onClick={() => navigate("/")}
                                    icon={<ArrowLeftOutlined style={homeIcon}/>}/> </Col>
                        <Col span={22}><Title editable level={3} style={title}>{project.name}</Title></Col>

                    </Row>
                </Col>

                <Col span={16} style={{textAlign: 'end', paddingRight: '4rem'}}>
                    <Title level={4} type="success" style={status}>{project.status}
                        <Button type='text'

                                icon={<EditOutlined style={{color: "green"}}/>}/>
                    </Title>

                </Col>
            </Row>
        </Affix>
    );
}

export default ProjectNavBar;