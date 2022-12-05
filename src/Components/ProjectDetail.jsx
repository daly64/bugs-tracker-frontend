import React from 'react';
import {Button, Card, Col, Divider, List, Progress, Row, Typography} from "antd";
import {bigcard, list, paragraph, mainColor, row} from "../GeneralStyle.js";
import {CheckOutlined, CloseOutlined, EditOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const {Paragraph, Title, Text} = Typography;


function ProjectDetail() {
    const navigate = useNavigate();
    return (
        <Col span={24} style={list}>
            <Card style={bigcard}>
                <Row gutter={10} style={row}>
                    <Col span={12}>
                        <Divider orientation="left">Description</Divider>
                        <Paragraph style={paragraph} editable>
                            project description, Duis dolor urna, aliquam ut laoreet sit amet, viverra quis urna.
                            In convallis odio quis commodo blandit. Donec congue pharetra volutpat.
                            Etiam malesuada gravida ligula, vitae ultricies libero dictum in.
                            Praesent sodales metus eget neque mattis sollicitudin.
                            Aliquam id tellus cursus, semper libero eget, cursus orci.
                            Vestibulum id dui magna.
                        </Paragraph>
                    </Col>
                    <Col span={4}/>
                    <Col span={8}>
                        <Divider orientation="center">Progress</Divider>
                        <Progress type="circle" strokeColor={mainColor} percent={75}/>
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
                            <List.Item> <Text>10 total</Text> </List.Item>
                            <List.Item><CheckOutlined style={{color: "green"}}/> <Text>3 resolved</Text> </List.Item>
                            <List.Item><CloseOutlined style={{color: "red"}}/> <Text>7 unresolved</Text> </List.Item>
                        </List>
                    </Col>
                    <Col span={12}>
                        <List header={<Title level={3}>Features
                            <Button type="link" icon={<EditOutlined/>}
                                    onClick={() => navigate("features")}
                            />
                        </Title>} bordered>
                            <List.Item> <Text>12 total</Text> </List.Item>
                            <List.Item><CheckOutlined style={{color: "green"}}/> <Text>6 developed</Text> </List.Item>
                            <List.Item><CloseOutlined style={{color: "red"}}/> <Text>6 not developed</Text> </List.Item>
                        </List>
                    </Col>
                </Row>

            </Card>
        </Col>
    );
}

export default ProjectDetail;