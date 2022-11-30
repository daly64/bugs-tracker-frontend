import React from 'react';
import {Row} from "antd";
import ProjectCard from "./ProjectCard.jsx";


function ProjectsList() {
    return (
        <>
            <Row style={{marginTop: '24px'}} gutter={[10, 10]}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

            </Row>
        </>
    );
}

export default ProjectsList;