import React, { useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [radioChecked, setRadioChecked] = useState(false)

    return (
        <AppContext.Provider value={{radioChecked, setRadioChecked}}>{children}</AppContext.Provider>
    )
}

export {AppContext, AppProvider}