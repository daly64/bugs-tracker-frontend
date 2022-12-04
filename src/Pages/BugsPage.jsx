import React from 'react';
import BugsList from "../Components/Lists/BugsList.jsx";
import NavBar from "../Components/NavBar.jsx";

function BugsPage() {
    const config = {
        title: '10 bugs',
        searchPlaceholder: 'search bug',
        addButton: 'Add New Bug',
        inputNameLabel: 'Bug Name :',
        inputDescriptionLabel: 'Bug Description :',
        inputNamePlaceholder: 'Please input your bug Name',
        inputDescriptionPlaceholder: 'Please input your bug Description',
        modalTitle: 'New Bug',
    }
    return (
        <>
            <NavBar config={config}/>
            <BugsList/>
        </>
    );
}

export default BugsPage;