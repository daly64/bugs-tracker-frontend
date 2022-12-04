import React,{useState} from 'react';
import {List, Switch} from "antd";


function BugItem({item}) {
    const [permission, setPermission] = useState({enabled: false});

    function onPermissionChanged(e) {
        setPermission({enabled: e})
    }
    return (
        <List.Item>
            <List.Item.Meta
                title={<a>{item.title}</a>}
                description={item.description}
            />

            <Switch style={{backgroundColor: permission.enabled ? 'green' : 'red'}}
                    checked={permission.enabled}
                    checkedChildren={'RESOLVED'}
                    unCheckedChildren={'UNRESOLVED'}
                    onChange={(e) => onPermissionChanged(e)}/>
        </List.Item>
    );
}

export default BugItem;