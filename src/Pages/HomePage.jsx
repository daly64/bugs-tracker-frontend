import React from 'react';
import ProjectsList from "../Components/Lists/ProjectsList.jsx";
import HomeNavBar from "../Components/NavBars/HomeNavBar";
import {useLoading, useProjects} from "../Features/projectsFeatures.js";
import LoadingPage from "./LoadingPage.jsx";


function HomePage() {
    let projects = useProjects()
    let isLoading = useLoading()
    return (
        <>
            {isLoading ?
                <LoadingPage/> :
                <>
                    <HomeNavBar/>
                    <ProjectsList projects={projects}/>
                </>}
        </>
    );
}

export default HomePage;