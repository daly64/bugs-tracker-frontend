// noinspection JSUnresolvedVariable

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProject, findProject, getProjects, removeProject, updateProject} from "./Store/projectsSlice.js";
import store from "./Store/configureStore.js";
import {getBugs} from "./Store/bugsSlice.js";
import {getFeatures} from "./Store/featuresSlice.js";

export function useProjects() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
    }, [])
    return useSelector(state => state.projects.data)
}

export function useLoading() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
    }, [])
    return useSelector(state => state.projects.isLoading)
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

export function getProject(id) {
    return useProjects().find(project => project._id === id)
}

export function updateProjectData(project) {
    store.dispatch(getBugs())
    store.dispatch(getFeatures())

    let bugs = store.getState().bugs.data
    let features = store.getState().features.data

    let projectBugs = bugs.filter(bug => bug.projectId === project._id)
    let projectFeatures = features.filter(feature => feature.projectId === project._id)

    let resolvedBugs = projectBugs.filter(bug => bug.resolved).length
    let unResolvedBugs = projectBugs.filter(bug => !bug.resolved).length
    let developedFeatures = projectFeatures.filter(feature => feature.developed).length
    let unDevelopedFeatures = projectFeatures.filter(feature => !feature.developed).length

    let totalBugs = projectBugs.length
    let totalFeatures = projectFeatures.length

    let progress = Number(((resolvedBugs + developedFeatures) / (totalBugs + totalFeatures)) * 100)
    let status= progress===100?'terminated':'in progress'

    if (!isNaN(progress)) {
        let updatedProject = {
            ...project,
            progress,
            resolvedBugs,
            unResolvedBugs,
            developedFeatures,
            unDevelopedFeatures,
            status
        }
        // let updatedProject = {...project, progress
        store.dispatch(updateProject(updatedProject))

    }
}

