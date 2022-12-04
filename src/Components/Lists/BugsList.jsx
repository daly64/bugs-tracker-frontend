import React from 'react';
import {Col, List} from "antd";
import {list} from "../../GeneralStyle.js";
import BugItem from "../Items/BugItem.jsx";


const data = [];
for (let i = 0; i < 11; i++)
    data.push({title: `Bug Title ${i}`, description: `Bug Description ${i}`})


function BugsList() {

    return (
        <Col span={24} style={list}>
            <List itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (<BugItem item={item}/>)}/>

        </Col>
    );
}

export default BugsList;