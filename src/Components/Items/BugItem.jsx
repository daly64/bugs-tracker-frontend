import React, {useState} from 'react';
import {Button, List, Switch} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {deleteBug} from "../../Features/bugsFeatures.js";


function BugItem({bug,projectId}) {
    const [permission, setPermission] = useState({enabled: false});

    function onPermissionChanged(e) {
        setPermission({enabled: e})
    }

    return (
        <List.Item>
            <List.Item.Meta
                title={<a>{bug.title}</a>}
                description={bug.description}
            />
            <Button type="ghost" icon={<DeleteOutlined/>} onClick={() => deleteBug(bug,projectId)}/>
            <Switch style={{backgroundColor: permission.enabled ? 'green' : 'red'}}
                    checked={permission.enabled}
                    checkedChildren={'RESOLVED'}
                    unCheckedChildren={'UNRESOLVED'}
                    onChange={(e) => onPermissionChanged(e)}/>
        </List.Item>
    );
}

export default BugItem;