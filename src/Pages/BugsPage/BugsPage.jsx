import React from 'react';
import NavBar from "./components/NavBar.jsx";
import BugsList from "./components/BugsList.jsx";

function BugsPage() {
    return (
        <>
            <NavBar/>
            <BugsList/>
        </>
    );
}

export default BugsPage;