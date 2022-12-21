import React from 'react';
import {Col, List} from "antd";
import style from "../../GeneralStyle.js";
import FeatureItem from "../Items/FeatureItem.jsx";


/*const data = [];
for (let i = 0; i < 13; i++)
    data.push({title: `Feature Title ${i}`, description: `Feature Description ${i}`})*/


function FeaturesList({features}) {

    return (
        <Col span={24} style={style.list}>
            <List itemLayout="horizontal"
                  dataSource={features}
                  renderItem={(feature) => (<FeatureItem feature={feature}/>)}/>

        </Col>
    );
}

export default FeaturesList;