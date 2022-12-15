import React from 'react';
import HomePage from "./Pages/HomePage.jsx";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage.jsx";
import BugsPage from "./Pages/BugsPage.jsx";
import FeaturesPage from "./Pages/FeaturesPage.jsx";

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    // {path: "/", element: <LoadingPage/>},
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