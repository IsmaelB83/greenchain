// Node imports
import React, { useState, useEffect } from "react";
// Own imports
import APIServices from '../services/index';

export const GreenchainContext = React.createContext({});

export default function GreenchainContextProvider({children}) {

    const [isLoadingAssets, setIsLoadingAssets] = useState(false);
    const [log, setLog] = useState('');
    const [assets, setAssets] = useState([]);
    const [filteredAssets, setFilteredAssets] = useState([]);
   
    useEffect(() => {
        setIsLoadingAssets(true);
        APIServices.getRegisteredCodes()
        .then(result => {
            setLog(returnLog('getRegisteredCodes', result));
            setAssets(result);
            setFilteredAssets(result);
            setIsLoadingAssets(false);
        })
        .catch(error => console.log(error));
    }, [])

    return (
        <GreenchainContext.Provider value={{isLoadingAssets, assets, filteredAssets, setFilteredAssets, log, setLog}}>
            {children}
        </GreenchainContext.Provider>
    )
}

function returnLog(action, log) {
    return `[${action} - ${new Date().toLocaleDateString('es-ES')}] -- \n ${JSON.stringify(log).toString()}`
}