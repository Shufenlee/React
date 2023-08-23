import { ReactNode, createContext, useState } from "react";
import * as React from 'react';

export interface LoadingContextProps{
    loading: boolean;
    changeLoading: (e: boolean)  => void;
}

const defaultValues : LoadingContextProps ={
    loading: false,
    changeLoading: (e: boolean) =>{}
}

export const LoadingContext = createContext<LoadingContextProps>(defaultValues);

export interface LoadingProviderProps{
    children : ReactNode
}

export function LoadingProvider ({children} : LoadingProviderProps) {

    const [loading, setLoading] = useState<boolean>(false);

    function changeLoading(e: boolean){
        setLoading(e)
        {console.log("changeLoading")}
    }

    return(
        <>
        <LoadingContext.Provider value={{loading, changeLoading}}>
            { loading ? <h2>Loading...</h2> : children}
        </LoadingContext.Provider>

        </>
    )

}


