import React from 'react';
import {Row} from "antd";
import ProjectItem from "../Items/ProjectItem.jsx";
import {list} from "../../GeneralStyle.js";


function ProjectsList() {
    return (
        <>
            <Row style={list} gutter={[10, 10]}>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>

            </Row>
        </>
    );
}

export default ProjectsList;