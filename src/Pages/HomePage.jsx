import React, {useEffect, useState} from 'react';
import ProjectsList from "../Components/Lists/ProjectsList.jsx";
import HomeNavBar from "../Components/NavBars/HomeNavBar";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../Store/projectsSlice.js";

function HomePage() {
    let initialProjects = useSelector(state => state.projects.data)
    let [projects, setProjects] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
        setProjects([...initialProjects])
/*        let filterTab = initialProjects.filter(p => p.name.includes("1"))
        setProjects([...filterTab])
        console.log(filterTab)*/
    }, [dispatch])

    return (
        <>
            <HomeNavBar/>
            <ProjectsList projects={projects}/>
        </>
    );
}

export default HomePage;