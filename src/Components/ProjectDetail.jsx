import React from 'react';
import {Button, Card, Col, Divider, List, Progress, Row, Typography} from "antd";
import style from "../GeneralStyle.js";
import {CheckOutlined, CloseOutlined, EditOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {updateProjectData} from "../Features/projectsFeatures.js";

const {Paragraph, Title, Text} = Typography;

const {detail, list, paragraph, mainColor, row} = style

function ProjectDetail({project}) {
    const navigate = useNavigate()
    updateProjectData(project)
    return (
        <>

            <Col span={24} style={list}>
                <Card style={detail}>
                    <Row gutter={10} style={row}>
                        <Col span={12}>
                            <Divider orientation="left">Description</Divider>
                            <Paragraph style={paragraph} editable>
                                {project.description}
                            </Paragraph>
                        </Col>
                        <Col span={4}/>
                        <Col span={8}>
                            <Divider orientation="center">Progress</Divider>
                            <Progress type="circle" strokeColor={mainColor} percent={project.progress}/>
                        </Col>
                    </Row>
                    <Row gutter={30} style={{marginTop: '5rem'}}>
                        <Col span={12}>
                            <List header={<Title level={3}>Bugs
                                <Button type="link"
                                        icon={<EditOutlined/>}
                                        onClick={() => navigate("bugs")}
                                /> </Title>}
                                  bordered>
                                <List.Item> <Text>{project.bugs.length} total</Text> </List.Item>
                                <List.Item><CheckOutlined style={{color: "green"}}/>
                                    <Text>{project.resolvedBugs} resolved</Text>
                                </List.Item>
                                <List.Item><CloseOutlined style={{color: "red"}}/>
                                    <Text>{project.unResolvedBugs} unresolved</Text>
                                </List.Item>
                            </List>
                        </Col>
                        <Col span={12}>
                            <List header={<Title level={3}>Features
                                <Button type="link" icon={<EditOutlined/>}
                                        onClick={() => navigate("features")}
                                />
                            </Title>} bordered>
                                <List.Item> <Text>{project.features.length} total</Text> </List.Item>
                                <List.Item><CheckOutlined style={{color: "green"}}/>
                                    <Text>{project.developedFeatures} developed</Text>
                                </List.Item>
                                <List.Item><CloseOutlined style={{color: "red"}}/>
                                    <Text>{project.unDevelopedFeatures} not developed</Text>
                                </List.Item>
                            </List>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </>

    );
}

export default ProjectDetail;