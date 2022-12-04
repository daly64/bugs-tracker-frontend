import React from 'react';
import {Button, Card, Col, Progress, Row, Tooltip, Typography} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {card, paragraph, primaryColor, row, status} from "../../GeneralStyle.js";
import {useNavigate} from "react-router-dom";

const {Paragraph, Text} = Typography;


function ProjectItem() {
    const navigate = useNavigate();
    return (
        <Col span={8} onClick={() => navigate("product/1")}>
            <Card hoverable title="Project Name" bordered style={card}>

                <Paragraph ellipsis={paragraph}>
                    project description, Duis dolor urna, aliquam ut laoreet sit amet, viverra quis urna.
                    In convallis odio quis commodo blandit. Donec congue pharetra volutpat.
                    Etiam malesuada gravida ligula, vitae ultricies libero dictum in.
                    Praesent sodales metus eget neque mattis sollicitudin.
                    Aliquam id tellus cursus, semper libero eget, cursus orci.
                    Vestibulum id dui magna.
                </Paragraph>

                <Row style={row}>
                    <Progress percent={50} steps={4} strokeColor={primaryColor}/>
                    <Text type="success" style={status}>In Development</Text>
                    <Tooltip placement="bottom" title='edit' color={primaryColor}>
                        <Button type="ghost" icon={<EditOutlined/>}/>
                    </Tooltip>
                </Row>
            </Card>
        </Col>
    );
}

export default ProjectItem;