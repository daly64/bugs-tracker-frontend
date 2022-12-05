import React from 'react';
import ProjectsList from "../Components/Lists/ProjectsList.jsx";
import HomeNavBar from "../Components/NavBars/HomeNavBar";

function HomePage() {
    return (
        <>
            <HomeNavBar/>
            <ProjectsList/>
        </>
    );
}

export default HomePage;