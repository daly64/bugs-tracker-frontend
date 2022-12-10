import {useEffect} from "react";
import {useSelector} from "react-redux";
import {findProject, getProjects} from "./Store/projectsSlice.js";
import store from "./Store/configureStore.js";

export function useProjects() {
    useEffect(() => {
        store.dispatch(getProjects())
    }, [])
    return useSelector(state => state.projects.data)
}

export function useProjectsSearch(value) {
    console.log('Search', value)
    if (value !== '') store.dispatch(findProject(value))
    else store.dispatch(getProjects())
}



