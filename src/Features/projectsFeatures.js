// noinspection JSUnresolvedVariable

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProject, findProject, getProjects, removeProject, updateProject} from "./Store/projectsSlice.js";
import store from "./Store/configureStore.js";
import {useBugs} from "./bugsFeatures.js";
import {useFeatures} from "./featuresFeatures.js";

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

    let bugs = useBugs(project._id)
    let features = useFeatures(project._id)
    let resolvedBugs = 0
    let unResolvedBugs = 0
    let developedFeatures = 0
    let unDevelopedFeatures = 0
    let totalBugs = bugs.length
    let totalFeatures = features.length
    bugs.forEach(bug => bug.reserved ? resolvedBugs += 1 : unResolvedBugs += 1)
    features.forEach(feature => feature.developed ? developedFeatures += 1 : unDevelopedFeatures += 1)
    let progress = ((resolvedBugs + developedFeatures) / (totalBugs + totalFeatures))
    console.log('progress =>', progress)
    let updatedProject = {...project, progress, resolvedBugs, unResolvedBugs, developedFeatures, unDevelopedFeatures}
    // store.dispatch(updateProject(updatedProject))

}

