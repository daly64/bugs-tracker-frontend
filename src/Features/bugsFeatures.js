// noinspection JSUnresolvedVariable

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjects, updateProject} from "./Store/projectsSlice.js";
import store from "./Store/configureStore.js";
import {addBug, findBug, getBugs, removeBug, updateBug} from "./Store/bugsSlice.js";

export function useBugs(id) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
        dispatch(getBugs())
    }, [])
    let projects = useSelector(state => state.projects.data)
    let globalBugs = useSelector(state => state.bugs.data)

    if (projects) {
        let project = projects.find(project => project._id === id)
        if (project) {
            let projectBugsIds = project.bugs
            let projectBugs = []
            globalBugs.forEach(bug => {
                if (projectBugsIds.includes(bug.index)) projectBugs.push(bug)
            })
            return projectBugs
        }
    }
}


export function bugsSearch(value) {
    if (value !== '') store.dispatch(findBug(value))
    else store.dispatch(getBugs())
}

export function modalTitleInput(bug, setBug, event) {
    setBug({...bug, title: event.target.value})
}

export function modalDescriptionInput(bug, setBug, event) {
    setBug({...bug, description: event.target.value})
}

function addBugToProjectBugs(newBugIndex, projectId) {
    store.dispatch(getProjects())
    let projects = store.getState().projects.data
    if (projects) {
        let project = projects.find(project => project._id === projectId)
        if (project) {
            let updatedProjectBugs = [...project.bugs, newBugIndex]
            let updatedProject = {...project, bugs: updatedProjectBugs}
            store.dispatch(updateProject(updatedProject))
        }
    }
}

function addBugToBug(bug) {
    store.dispatch(addBug(bug))
}

export function modalAddBug(bug, projectId) {
    let newBug = {...bug, index: Date.now()}
    addBugToBug(newBug)
    addBugToProjectBugs(newBug.index, projectId)
}


function deleteBugFromProjectBugs(bugIndex, projectId) {
    store.dispatch(getProjects())
    let projects = store.getState().projects.data
    if (projects) {
        let project = projects.find(project => project._id === projectId)
        if (project) {
            let updatedProjectBugs = project.bugs.filter(projectBugIndex => projectBugIndex !== bugIndex)
            let updatedProject = {...project, bugs: updatedProjectBugs}
            store.dispatch(updateProject(updatedProject))
        }
    }
}

function deleteBugFromBugs(bug) {
    store.dispatch(removeBug(bug._id))
}

export function deleteBug(bug, projectId) {
    deleteBugFromBugs(bug)
    deleteBugFromProjectBugs(bug.index, projectId)
}

export function updateBugFromBugs(bug) {
    store.dispatch(updateBug(bug))
}
