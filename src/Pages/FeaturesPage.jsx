import React from 'react';
import FeaturesList from "../Components/Lists/FeaturesList.jsx";
import FeaturesNavBar from "../Components/NavBars/FeaturesNavBar.jsx";
import {useParams} from "react-router-dom";
import {useFeatures} from "../Features/featuresFeatures.js";
import LoadingPage from "./LoadingPage.jsx";

function FeaturesPage() {
    let {id} = useParams()
    let features = useFeatures(id)
    return (
        <>
            {features ?
                <>
                    <FeaturesNavBar features={features} id={id}/>
                    <FeaturesList features={features}/>
                </> :
                <LoadingPage/>
            }
        </>
    );
}

export default FeaturesPage;