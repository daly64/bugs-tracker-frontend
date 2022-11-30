import React from 'react';
import {Button, Card, Col, Progress, Row, Tooltip, Typography} from "antd";
import {EditOutlined} from "@ant-design/icons";

const {Paragraph, Text} = Typography;


const card = {
    border: '.5px solid #6366f1',
    textAlign: 'center',
};
const paragraph = {rows: 4,};
const row = {justifyContent: 'space-around'};

function ProjectCard() {
    return (
        <Col span={8}>
            <Card hoverable title="Project Name" bordered style={card}>

                <Paragraph ellipsis={paragraph}>
                    Duis dolor urna, aliquam ut laoreet sit amet, viverra quis urna.
                    In convallis odio quis commodo blandit. Donec congue pharetra volutpat.
                    Etiam malesuada gravida ligula, vitae ultricies libero dictum in.
                    Praesent sodales metus eget neque mattis sollicitudin.
                    Aliquam id tellus cursus, semper libero eget, cursus orci.
                    Vestibulum id dui magna.
                </Paragraph>

                <Row style={row}>
                    <Progress percent={50} steps={4} strokeColor='#6366f1'/>
                    <Text type="success" style={{fontWeight: 'bold'}}>In Devlopement</Text>
                    <Tooltip placement="bottom" title='edit' color='#6366f1'>
                        <Button type="ghost" icon={<EditOutlined/>}/>
                    </Tooltip>
                </Row>
            </Card>
        </Col>
    );
}

export default ProjectCard;