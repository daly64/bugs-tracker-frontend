// noinspection JSUnresolvedVariable

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "./Store/projectsSlice.js";
import store from "./Store/configureStore.js";
import {addBug, getBugs, removeBug} from "./Store/bugsSlice.js";

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
                if (projectBugsIds.includes(bug._id)) projectBugs.push(bug)
            })
            return projectBugs
        }
    }
}

export function useBugsProject(id) {
    store.dispatch(getProjects())
    let projects = useSelector(state => state.projects.data)
    if (projects) {
        let project = projects.find(project => project._id === id)
        if (project) {
            return project
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

export function modalAddBug(bug, id) {

    store.dispatch(addBug(bug))
    let project = useBugsProject(id)
    console.log(project)


}

export function deleteBug(bug) {
    store.dispatch(removeBug(bug._id))
}


