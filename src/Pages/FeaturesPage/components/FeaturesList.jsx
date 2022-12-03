import React from 'react';
import {Col, List} from "antd";
import {list} from "../../../GeneralStyle.js";
import FeatureItem from "./FeatureItem.jsx";


const data = [];
for (let i = 0; i < 13; i++)
    data.push({title: `Feature Title ${i}`, description: `Feature Description ${i}`})


function FeaturesList() {

    return (
        <Col span={24} style={list}>
            <List itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (<FeatureItem item={item}/>)}/>

        </Col>
    );
}

export default FeaturesList;