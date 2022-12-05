import React from 'react';
import FeaturesList from "../Components/Lists/FeaturesList.jsx";
import FeaturesNavBar from "../Components/NavBars/FeaturesNavBar.jsx";

function FeaturesPage() {
    return (
        <>
            <FeaturesNavBar/>
            <FeaturesList/>
        </>
    );
}

export default FeaturesPage;