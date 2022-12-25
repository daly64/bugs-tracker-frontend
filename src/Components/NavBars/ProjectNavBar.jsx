import React, {useState} from 'react';
import {Affix, Button, Col, Row, Typography} from "antd";
import style from '../../GeneralStyle.js'
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {updateProjectName} from "../../Features/projectsFeatures.js";

const {homeButton, homeIcon, nav, status, title} = style
const {Title} = Typography;

function ProjectNavBar({project}) {

    let [projectName, setProjectName] = useState(project.name)

    const navigate = useNavigate()
    return (
        <>
            <Affix offsetTop='0'>

                <Row style={nav}>
                    <Col span={8}>
                        <Row>
                            <Col span={2} style={homeButton}>
                                <Button type={"link"}
                                        shape="circle"
                                        onClick={() => navigate("/")}
                                        icon={<ArrowLeftOutlined style={homeIcon}/>}/> </Col>
                            <Col span={22}><Title
                                editable={{onChange: (value) => updateProjectName(value, project, setProjectName)}}
                                level={3} style={title}>{projectName}</Title></Col>

                        </Row>
                    </Col>
                    <Col span={16} style={{textAlign: 'end', paddingRight: '4rem'}}>
                        <Title level={4} type="success" style={status}>{project.status}
                        </Title>
                    </Col>
                </Row>
            </Affix>

        </>

    )


}


export default ProjectNavBar;