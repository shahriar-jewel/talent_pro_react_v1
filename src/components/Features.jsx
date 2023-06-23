import React, { useContext, useEffect } from "react";
import { GlobalState } from "../GlobalState";
import FeatureItem from "./FeatureItem";

const Features = () => {
    // Global state initialization
    const state = useContext(GlobalState);
    const [features, setFeatures] = state.featureProvider.features;
    const [loading, setLoading] = state.featureProvider.loading;

    return (
        <div className="flex flex-wrap w-3/4 md:w-5/6 my-10">
            {(features?.list)?.length > 0 && !loading ?
                (features?.list)?.map((feature, i) =>
                    <FeatureItem
                        key={i}
                        image={`${import.meta.env.VITE_IMAGE_BASE}/${feature.image}`}
                        title={feature.title}
                        description={feature.description}
                    />) : 'Loading...'}

        </div>
    );
};

export default Features;
