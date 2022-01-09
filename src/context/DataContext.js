import React, {createContext, useState, useEffect} from 'react'


const DataContext = createContext()

export default DataContext


export function DataContextProvider({children}) {
    const [mainStore, setMainStore] = useState([]);

    let storeObject = {};

    const [fullname, setFullname] =  useState("");
    const [jobtype, setJobType] =  useState("");
    const [imageTemp, setTempImage] =  useState("");
    // const 




    // function to handle all state / data
    function addUserInfo(){

    }

    return (
        <DataContext.Provider value={{
            fullname, 
            jobtype,
            imageTemp,

            setTempImage,
            setJobType,
            setFullname
        }}>
            {children}
        </DataContext.Provider>
    )
}
