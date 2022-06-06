import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const CrudContext = React.createContext()

export const CrudProvider = (props) => {
    const URL = 'http://localhost:3000/fmea'
    const [crud, setCrud] = useState([])
    const [infoFmea, setInfoFmea] = useState([])

    useEffect(() => {
        axios.get(URL)
        .then(resp => {
            setInfoFmea(resp.data)
        } )
    },[crud])

    return (
        <CrudContext.Provider value={{crud , setCrud, infoFmea}}>
            {console.log(crud)}
            {props.children}
        </CrudContext.Provider>
    )
}