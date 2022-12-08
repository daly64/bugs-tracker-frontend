import React, {useEffect} from 'react';
import ProjectsList from "../Components/Lists/ProjectsList.jsx";
import HomeNavBar from "../Components/NavBars/HomeNavBar";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../Store/projectsSlice.js";

function HomePage() {
    let projects = useSelector(state => state.projects.data)
    // let error = useSelector(state => state.projects.error)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())

    }, [dispatch])
    console.log(projects)
    return (
        <>
            <HomeNavBar/>
            <ProjectsList/>
        </>
    );
}

export default HomePage;