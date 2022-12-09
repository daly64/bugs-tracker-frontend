import React from 'react';
import {Button, Card, Col, Progress, Row, Tooltip, Typography} from "antd";
import {EditOutlined} from "@ant-design/icons";
import style from "../../GeneralStyle.js";
import {useNavigate} from "react-router-dom";

const {Paragraph, Text} = Typography;
const {card, paragraph, mainColor, row, status}=style

function ProjectItem({project}) {
    const navigate = useNavigate();
    return (
        <Col span={8} onClick={() => navigate(`product/${project._id}`)}>
            <Card hoverable title={project.name} bordered style={card}>

                <Paragraph ellipsis={paragraph}>
                    {project.description}
                </Paragraph>

                <Row style={row}>
                    <Progress percent={project.progress} steps={4} strokeColor={mainColor}/>
                    <Text type="success" style={status}>{project.status}</Text>
                    <Tooltip placement="bottom" title='edit' color={mainColor}>
                        <Button type="ghost" icon={<EditOutlined/>}/>
                    </Tooltip>
                </Row>
            </Card>
        </Col>
    );
}

export default ProjectItem;