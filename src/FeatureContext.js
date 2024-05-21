import React, { useState } from "react";

const FeatureFlag=React.createContext({})


export const FeatureFlagProvider=({children})=>{

    const [feature,setFeature]=useState({isEnabled:true})

    return <FeatureFlag.Provider value={{feature}}>
            {children}
   </FeatureFlag.Provider>
}
export default FeatureFlag