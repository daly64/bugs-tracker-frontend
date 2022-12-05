import React from 'react';
import BugsList from "../Components/Lists/BugsList.jsx";
import BugsNavBar from "../Components/NavBars/BugsNavBar.jsx";

function BugsPage() {
    return (
        <>
            <BugsNavBar/>
            <BugsList/>
        </>
    );
}

export default BugsPage;