import React, {useState} from 'react';
import {Button, List, Switch} from "antd";
import {deleteFeature, updateFeatureFromFeatures} from "../../Features/featuresFeatures.js";
import {DeleteOutlined} from "@ant-design/icons";


function FeatureItem({feature}) {
    const [developed, setDeveloped] = useState({enable: feature.developed});

    function handleChanged(e) {
        setDeveloped({enable: e})
        let updatedFeature = {...feature, developed: e}
        updateFeatureFromFeatures(updatedFeature)
    }

    return (
        <List.Item>
            <List.Item.Meta
                title={<a>{feature.title}</a>}
                description={feature.description}
            />
            <Button type="ghost" icon={<DeleteOutlined/>} onClick={() => deleteFeature(feature)}/>
            <Switch style={{backgroundColor: developed.enabled ? 'green' : 'red'}}
                    checked={developed.enabled}
                    checkedChildren={'DEVELOPED'}
                    unCheckedChildren={'UNDEVELOPED'}
                    onChange={(e) => handleChanged(e)}/>
        </List.Item>
    );
}

export default FeatureItem;