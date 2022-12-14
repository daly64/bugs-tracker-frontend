import {configureStore} from "@reduxjs/toolkit";
import bugsReducer from './bugsSlice.js'
import featuresReducer from './featuresSlice.js'
import projectsReducer from './projectsSlice.js'
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        bugs: bugsReducer,
        features: featuresReducer,
        projects: projectsReducer,
    },
    middleware:[thunk]
})
export default store