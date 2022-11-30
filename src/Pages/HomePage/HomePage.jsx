import React from 'react';
import NavBar from "./components/NavBar.jsx";
import ProjectsList from "./components/ProjectsList.jsx";

function HomePage() {
    return (
        <>
            <NavBar/>
            <ProjectsList/>
        </>
    );
}

export default HomePage;