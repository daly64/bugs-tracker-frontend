import React from 'react';
import NavBar from "../Components/NavBar.jsx";
import FeaturesList from "../Components/Lists/FeaturesList.jsx";

function FeaturesPage() {
    const config = {
        title: '12 features',
        searchPlaceholder: 'search feature',
        addButton: 'Add New Feature',
        inputNameLabel: 'Feature Name :',
        inputDescriptionLabel: 'Feature Description :',
        inputNamePlaceholder: 'Please input your feature Name',
        inputDescriptionPlaceholder: 'Please input your feature Description',
        modalTitle: 'New Feature',
    }
    return (
        <>
            <NavBar config={config}/>
            <FeaturesList/>
        </>
    );
}

export default FeaturesPage;