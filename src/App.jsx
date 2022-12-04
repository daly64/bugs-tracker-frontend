import React from 'react';
import HomePage from "./Pages/HomePage/HomePage.jsx";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage/ProjectPage.jsx";
import BugsPage from "./Pages/BugsPage/BugsPage.jsx";
import FeaturesPage from "./Pages/FeaturesPage/FeaturesPage.jsx";

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "product/:id", element: <ProjectPage/>},
    {path: "product/:id/bugs", element: <BugsPage/>},
    {path: "product/:id/features", element: <FeaturesPage/>},
]);

function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>

    )
}

export default App