import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProject, findProject, getProjects, removeProject} from "./Store/projectsSlice.js";
import store from "./Store/configureStore.js";

export function useProjects() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
    }, [])
    return useSelector(state => state.projects.data)
}

export function projectsSearch(value) {
    if (value !== '') store.dispatch(findProject(value))
    else store.dispatch(getProjects())
}

export function modalNameInput(project, setProject, event) {
    setProject({...project, name: event.target.value})
}

export function modalDescriptionInput(project, setProject, event) {
    setProject({...project, description: event.target.value})
}

export function modalAddProject(project) {
    store.dispatch(addProject(project))
}

export function deleteProject(project) {
    store.dispatch(removeProject(project._id))
}



