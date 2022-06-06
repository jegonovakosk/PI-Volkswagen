import React, {useState} from 'react'

export const CrudContext = React.createContext()

export const CrudProvider = (props) => {

    const [crud, setCrud] = useState([])
    
    return (
        <CrudContext.Provider value={{crud , setCrud}}>
            {console.log(crud)}
            {props.children}
        </CrudContext.Provider>
    )
}