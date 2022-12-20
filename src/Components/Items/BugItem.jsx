import React, {useState} from 'react';
import {Button, List, Switch} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {deleteBug, updateBugFromBugs} from "../../Features/bugsFeatures.js";


function BugItem({bug, projectId}) {
    const [resolved, setResolved] = useState(bug.resolved);

    function handleChanged(e) {
        setResolved(e)
        let updatedBug = {...bug, resolved: e}
        updateBugFromBugs(updatedBug)

    }

    return (
        <List.Item>
            <List.Item.Meta
                title={<a>{bug.title}</a>}
                description={bug.description}
            />
            <Button type="ghost" icon={<DeleteOutlined/>} onClick={() => deleteBug(bug, projectId)}/>
            <Switch style={{backgroundColor: resolved ? 'green' : 'red'}}
                    checked={resolved}
                    checkedChildren={'RESOLVED'}
                    unCheckedChildren={'UNRESOLVED'}
                    onChange={(e) => handleChanged(e)}/>
        </List.Item>
    );
}

export default BugItem;