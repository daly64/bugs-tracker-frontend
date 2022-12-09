import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "./Store/projectsSlice.js";

let initialProjects
let projects

export function useProjects() {
    initialProjects = useSelector(state => state.projects.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())

    }, [dispatch])
    projects = initialProjects


    return projects
}

export function useProjectsSearch(value) {
    console.log('Search', value)
/*    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findProjects())

    }, [dispatch])*/
}



