import React from 'react';
import BugsList from "../Components/Lists/BugsList.jsx";
import BugsNavBar from "../Components/NavBars/BugsNavBar.jsx";
import {useParams} from "react-router-dom";
import {useBugs} from "../Features/bugsFeatures.js";
import LoadingPage from "./LoadingPage.jsx";

function BugsPage() {
    let {id} = useParams()
    let bugs = useBugs(id)
    return (
        <>
            {bugs ?
                <>
                    <BugsNavBar bugs={bugs} id={id}/>
                    <BugsList bugs={bugs}/>
                </> :
                <LoadingPage/>
            }
        </>
    );
}

export default BugsPage;