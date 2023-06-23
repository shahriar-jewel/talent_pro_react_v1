import axios from 'axios';
import React, { createContext } from 'react';
import FeatureApi from './provider/FeatureApi';

// global state to provide data everywhere 
export const GlobalState = createContext();
export const GlobalDataProvider = ({children}) =>{
    const state = {
        featureProvider: FeatureApi()
    };

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}