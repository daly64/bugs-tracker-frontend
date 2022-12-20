import React, {useState} from 'react';
import {Button, List, Switch} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {deleteBug, updateBugFromBugs} from "../../Features/bugsFeatures.js";


function BugItem({bug}) {
    const [resolved, setResolved] = useState({enable: bug.resolved});

    function handleChanged(e) {
        setResolved({enable: e})
        let updatedBug = {...bug, resolved: e}
        updateBugFromBugs(updatedBug)

    }

    return (
        <List.Item>
            <List.Item.Meta
                title={<a>{bug.title}</a>}
                description={bug.description}
            />
            <Button type="ghost" icon={<DeleteOutlined/>} onClick={() => deleteBug(bug)}/>
            <Switch style={{backgroundColor: resolved.enable ? 'green' : 'red'}}
                    checked={resolved.enable}
                    checkedChildren={'RESOLVED'}
                    unCheckedChildren={'UNRESOLVED'}
                    onChange={(e) => handleChanged(e)}/>
        </List.Item>
    );
}

export default BugItem;