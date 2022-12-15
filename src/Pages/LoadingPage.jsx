import React from 'react';
import {Typography} from "antd";
import {BugOutlined} from "@ant-design/icons";
import GeneralStyle from "../GeneralStyle.js";

const {centerDiv, loadingIcon, loadingText} = GeneralStyle

function LoadingPage() {
    return (<div style={centerDiv}>
            <div>
                <BugOutlined spin style={loadingIcon}/>
                <Typography.Title style={loadingText}>Loading ...</Typography.Title>
            </div>

        </div>

    );
}

export default LoadingPage;