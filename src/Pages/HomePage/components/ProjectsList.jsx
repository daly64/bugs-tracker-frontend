import React from 'react';
import {Row} from "antd";
import ProjectCard from "./ProjectCard.jsx";
import {list} from "./style.js";


function ProjectsList() {
    return (
        <>
            <Row style={list} gutter={[10, 10]}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

            </Row>
        </>
    );
}

export default ProjectsList;