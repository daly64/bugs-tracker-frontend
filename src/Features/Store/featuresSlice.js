// noinspection JSUnresolvedVariable,DuplicatedCode

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//new bug object
let newFeature = (index, title, description, projectId) => (
    {index: index, description: description, developed: false, title: title, projectId: projectId}
)


// base url
// let baseURL = 'http://localhost:5500/features'
let baseURL = 'https://bugs-tracker-backend-api.onrender.com/features'


let name = 'Features'
let initialState = {isLoading: false, data: [], error: ''}

const requestFeature = async (config, {rejectWithValue}) => {
    try {
        return (await axios.request(config)).data
    } catch (err) {
        return rejectWithValue(err.message)
    }
}
const getFeatures = createAsyncThunk(
    'feature/get',
    async (arg, {rejectWithValue}) => {
        let config = {baseURL, method: 'GET', data: {}}
        return await requestFeature(config, {rejectWithValue})
    })
const addFeature = createAsyncThunk(
    'feature/add',
    async ({index, title, description, projectId}, {rejectWithValue}) => {
        let config = {baseURL, method: 'POST', data: newFeature(index, title, description, projectId)}
        return await requestFeature(config, {rejectWithValue})
    })
const removeFeature = createAsyncThunk(
    'feature/remove',
    async (id, {rejectWithValue}) => {
        let config = {baseURL: `${baseURL}/${id}`, method: 'DELETE', data: {}}
        await requestFeature(config, {rejectWithValue})
        return id
    })

const updateFeature = createAsyncThunk(
    'feature/update',
    async (feature, {rejectWithValue}) => {
        let config = {baseURL: `${baseURL}/${feature._id}`, method: 'PUT', data: feature}
        await requestFeature(config, {rejectWithValue})
        return bug
    })


const FeaturesSlice = createSlice({
    name,
    initialState,
    reducers: {
        findFeature: (state = state, {payload}) =>
            ({...state, data: state.data.filter(feature => feature.title.includes(payload))}),
    },
    extraReducers: builder => {
        builder
            .addCase(PENDING, (state) => pending(state))
            .addCase(REJECTED, (state, {payload}) => rejected(payload, state))
            .addCase(GET_FULFILLED, (state, {payload}) => get(payload, state))
            .addCase(ADD_FULFILLED, (state, {payload}) => add(payload, state))
            .addCase(REMOVE_FULFILLED, (state, {payload}) => remove(payload, state))
            .addCase(UPDATE_FULFILLED, (state, {payload}) => update(payload, state))


    }
})

let PENDING = getFeatures.pending || addFeature.pending || removeFeature.pending
let REJECTED = getFeatures.rejected || addFeature.rejected || removeFeature.rejected
let GET_FULFILLED = getFeatures.fulfilled
let ADD_FULFILLED = addFeature.fulfilled
let REMOVE_FULFILLED = removeFeature.fulfilled
let UPDATE_FULFILLED = updateFeature.fulfilled

const pending = (state) => ({...state, isLoading: true})
const rejected = (error, state) => ({...state, isLoading: false, error})
const get = (Feature, state) => ({...state, isLoading: false, data: Feature})

const add = (toAddFeature, state) => ({...state, data: [...state.data, toAddFeature]})
const updateData = (updatedFeature, state) => state.data.map(oldFeature => oldFeature._id === updatedFeature._id ? updatedFeature : oldFeature)
const update = (updatedFeature, state) => ({...state, data: updateData(updatedFeature, state)})
const remove = (deleteId, state) => ({...state, data: state.data.filter(feature => feature._id !== deleteId)})


export const {findFeature} = FeaturesSlice.actions
export {getFeatures, addFeature, removeFeature, updateFeature}

export default FeaturesSlice.reducer