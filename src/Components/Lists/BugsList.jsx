import React from 'react';
import {Col, List} from "antd";
import style from "../../GeneralStyle.js";
import BugItem from "../Items/BugItem.jsx";


/*const data = [];
for (let i = 0; i < 11; i++)
    data.push({title: `Bug Title ${i}`, description: `Bug Description ${i}`})*/


function BugsList({bugs}) {

    return (
        <Col span={24} style={style.list}>
            <List itemLayout="horizontal"
                  dataSource={bugs}
                  renderItem={(bug) => (<BugItem bug={bug}/>)}/>

        </Col>
    );
}

export default BugsList;