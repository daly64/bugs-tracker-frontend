// noinspection JSUnresolvedVariable

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//new bug object
let newBug = (index, title, description, projectId) => (
    {index: index, description: description, resolved: false, title: title, projectId: projectId}
)


// base url
// let baseURL = 'http://localhost:5500/bugs'
let baseURL = 'https://bugs-tracker-backend-api.onrender.com/bugs'


let name = 'Bugs'
let initialState = {isLoading: false, data: [], error: ''}

const requestBugs = async (config, {rejectWithValue}) => {
    try {
        return (await axios.request(config)).data
    } catch (err) {
        return rejectWithValue(err.message)
    }
}
const getBugs = createAsyncThunk(
    'bugs/get',
    async (arg, {rejectWithValue}) => {
        let config = {baseURL, method: 'GET', data: {}}
        return await requestBugs(config, {rejectWithValue})
    })
const addBug = createAsyncThunk(
    'bugs/add',
    async ({index, title, description, projectId}, {rejectWithValue}) => {
        let config = {baseURL, method: 'POST', data: newBug(index, title, description, projectId)}
        return await requestBugs(config, {rejectWithValue})
    })
const removeBug = createAsyncThunk(
    'bugs/remove',
    async (id, {rejectWithValue}) => {
        let config = {baseURL: `${baseURL}/${id}`, method: 'DELETE', data: {}}
        await requestBugs(config, {rejectWithValue})
        return id
    })

const updateBug = createAsyncThunk(
    'bugs/update',
    async (bug, {rejectWithValue}) => {
        let config = {baseURL: `${baseURL}/${bug._id}`, method: 'PUT', data: bug}
        await requestBugs(config, {rejectWithValue})
        return bug
    })


const bugsSlice = createSlice({
    name,
    initialState,
    reducers: {
        findBug: (state = state, {payload}) =>
            ({...state, data: state.data.filter(bug => bug.title.includes(payload))}),
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

let PENDING = getBugs.pending || addBug.pending || removeBug.pending
let REJECTED = getBugs.rejected || addBug.rejected || removeBug.rejected
let GET_FULFILLED = getBugs.fulfilled
let ADD_FULFILLED = addBug.fulfilled
let REMOVE_FULFILLED = removeBug.fulfilled
let UPDATE_FULFILLED = updateBug.fulfilled

const pending = (state) => ({...state, isLoading: true})
const rejected = (error, state) => ({...state, isLoading: false, error})
const get = (bugs, state) => ({...state, isLoading: false, data: bugs})

const add = (toAddBug, state) => ({...state, data: [...state.data, toAddBug]})
const updateData = (updatedBug, state) => state.data.map(oldBug => oldBug._id === updatedBug._id ? updatedBug : oldBug)
const update = (updatedBug, state) => ({...state, data: updateData(updatedBug, state)})
const remove = (deleteId, state) => ({...state, data: state.data.filter(bug => bug._id !== deleteId)})


export const {findBug} = bugsSlice.actions
export {getBugs, addBug, removeBug, updateBug}

export default bugsSlice.reducer