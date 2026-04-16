import { createContext, useState } from "react";


export const FlexDirContex = createContext()
export const FlexDirContexProvider = ({children})=>{
    const [ flexDir ,setFlexDir ] = useState('row')
    const changeFlexDir = (state)=>{
        if (state == 'row') {
            setFlexDir('row')
            
        } else {
            
            setFlexDir('col')
        }
    }

    return(
        <FlexDirContex.Provider value={{flexDir , changeFlexDir}}>
            {children}
        </FlexDirContex.Provider>

    )


}