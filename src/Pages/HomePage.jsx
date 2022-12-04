import React from 'react';
import NavBar from "../Components/NavBar.jsx";
import ProjectsList from "../Components/Lists/ProjectsList.jsx";

function HomePage() {
    const config = {
        title: 'Bug Tracker',
        searchPlaceholder: 'search project',
        addButton: 'Add New Project',
        inputNameLabel: 'Project Name :',
        inputDescriptionLabel: 'Project Description :',
        inputNamePlaceholder: 'Please input your project Name',
        inputDescriptionPlaceholder: 'Please input your project Description',
        modalTitle: 'New Project',
    }
    return (
        <>
            <NavBar config={config}/>
            <ProjectsList/>
        </>
    );
}

export default HomePage;