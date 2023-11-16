import { createContext, useContext, useState } from "react";



const CashInOutContext=createContext()


const ContextProvider=({children})=>{
    const [login,setLogin]=useState(false)

    return(

    <ContextProvider.Provider value={{login,setLogin}} >
        {children}
    </ContextProvider.Provider>
    )

}

export const useCashInOutAppContext=()=>{
    return useContext(CashInOutContext)
}