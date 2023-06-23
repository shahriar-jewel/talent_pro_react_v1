import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureItem = (props) => {
    return (
        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 my-10 flex flex-col">
            <img
                src={props.image}
                alt={props.title}
                className="mb-5 w-16 h-14"
            />
            <h1 className="font-semibold text-lg md:pr-8 lg:pr-10 xl:pr-24 mb-2">
                {props.title}
            </h1>
            <p className="pr-5 md:pr-10 flex-1">{props.description}</p>
            {/* button component  */}
            <button className="flex items-center cursor-pointer mt-6">
                <span className="text-[#32c5ff] mr-2">Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} style={{ color: "32C5FF" }} />
            </button>
        </div>
    );
};

export default FeatureItem;
