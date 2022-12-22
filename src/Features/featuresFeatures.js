// noinspection JSUnresolvedVariable


import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjects, updateProject} from "./Store/projectsSlice.js";
import store from "./Store/configureStore.js";
import {addFeature, findFeature, getFeatures, removeFeature, updateFeature} from "./Store/featuresSlice.js";

export function useFeatures(id) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjects())
        dispatch(getFeatures())
    }, [])
    let projects = useSelector(state => state.projects.data)
    let globalFeatures = useSelector(state => state.features.data)

    if (projects) {
        let project = projects.find(project => project._id === id)
        if (project) {
            let projectFeaturesIds = project.features
            let projectFeatures = []
            globalFeatures.forEach(feature => {
                if (projectFeaturesIds.includes(feature.index)) projectFeatures.push(feature)
            })
            return projectFeatures
        }
    }
}


export function featuresSearch(value) {
    if (value !== '') store.dispatch(findFeature(value))
    else store.dispatch(getFeatures())
}

export function modalTitleInput(feature, setFeature, event) {
    setFeature({...feature, title: event.target.value})
}

export function modalDescriptionInput(feature, setFeature, event) {
    setFeature({...feature, description: event.target.value})
}

function addFeatureToProjectFeatures(newFeatureIndex, projectId) {
    store.dispatch(getProjects())
    let projects = store.getState().projects.data
    if (projects) {
        let project = projects.find(project => project._id === projectId)
        if (project) {
            let updatedProjectFeatures = [...project.features, newFeatureIndex]
            let updatedProject = {
                ...project,
                features: updatedProjectFeatures,
                unDevelopedFeatures: project.unDevelopedFeatures + 1
            }
            store.dispatch(updateProject(updatedProject))
        }
    }
}

function addFeatureToFeatures(feature) {
    store.dispatch(addFeature(feature))
}

export function modalAddFeature(feature, projectId) {
    let newFeature = {...feature, index: Date.now()}
    addFeatureToFeatures(newFeature)
    addFeatureToProjectFeatures(newFeature.index, projectId)
}

function getFeatureProject(feature) {
    store.dispatch(getProjects())
    let projects = store.getState().projects.data
    if (projects) {
        let project = projects.find(project => project._id === feature.projectId)
        if (project) {
            return project
        }
    }
}

function deleteFeatureFromProjectFeatures(feature) {

    let project = getFeatureProject(feature)
    if (project) {
        let updatedProjectFeatures = project.features.filter(projectFeatureIndex => projectFeatureIndex !== feature.index)
        let updatedProject = feature.developed ?
            {
                ...project,
                features: updatedProjectFeatures,
                developedFeatures: project.developedFeatures > 0 ? project.developedFeatures - 1 : 0
            } :
            {
                ...project,
                features: updatedProjectFeatures,
                unDevelopedFeatures: project.unDevelopedFeatures > 0 ? project.unDevelopedFeatures - 1 : 0
            }

        store.dispatch(updateProject(updatedProject))

    }

}

function deleteFeatureFromFeatures(feature) {
    store.dispatch(removeFeature(feature._id))
}


export function deleteFeature(feature) {
    deleteFeatureFromFeatures(feature)
    deleteFeatureFromProjectFeatures(feature)
}

export function updateFeatureFromFeatures(feature) {
    store.dispatch(updateFeature(feature))
    let project = getFeatureProject(feature)
    let updatedProject = feature.developed ?
        {
            ...project,
            developedFeatures: project.developedFeatures + 1,
            unDevelopedFeatures: project.unDevelopedFeatures > 0 ? project.unDevelopedFeatures - 1 : 0
        } :
        {
            ...project,
            developedFeatures: project.developedFeatures > 0 ? project.developedFeatures - 1 : 0,
            unDevelopedFeatures: project.unDevelopedFeatures + 1
        }
    store.dispatch(updateProject(updatedProject))
    }
