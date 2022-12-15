import React from 'react';
import ProjectDetail from "../Components/ProjectDetail.jsx";
import ProjectNavBar from "../Components/NavBars/ProjectNavBar.jsx";
import LoadingPage from "./LoadingPage.jsx";
import {useParams} from "react-router-dom";
import {getProject} from "../Features/projectsFeatures.js";

function ProjectPage() {

    let {id} = useParams();
    let project = getProject(id)
    return (
        <>
            {project !== undefined ?
                <>
                    <ProjectNavBar project={project}/>
                    <ProjectDetail project={project}/>
                </>
                :
                <LoadingPage/>

            }
        </>


    );
}

export default ProjectPage;