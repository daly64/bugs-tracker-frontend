import React from 'react';
import ProjectsList from "../Components/Lists/ProjectsList.jsx";
import HomeNavBar from "../Components/NavBars/HomeNavBar";
import {useProjects} from "../Features/Features.js";


function HomePage() {
    let projects = useProjects()

    return (
        <>
            <HomeNavBar/>
            <ProjectsList projects={projects}/>
        </>
    );
}

export default HomePage;