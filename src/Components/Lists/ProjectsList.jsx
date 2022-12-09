import React from 'react';
import {Row} from "antd";
import ProjectItem from "../Items/ProjectItem.jsx";
import style from "../../GeneralStyle.js";


function ProjectsList({projects}) {
    const ProjectList=projects.map(project=><ProjectItem key={project._id} project={project}/>)
    return (
        <>
            <Row style={style.list} gutter={[10, 10]}>
                {ProjectList}
            </Row>
        </>
    );
}

export default ProjectsList;