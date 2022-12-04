import React from 'react';
import NavBar from "../Components/NavBar.jsx";
import ProjectDetail from "../Components/ProjectDetail.jsx";

function ProjectPage() {
    const config = {
        title: 'Project Name',

    }
    return (
        <>
            <NavBar config={config}/>
            <ProjectDetail/>
        </>
    );
}

export default ProjectPage;