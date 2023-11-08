import React, {useState} from "react";
import ContextApi from "@/Content/ContextApi";


interface IContext {
    children: React.ReactNode
}
export interface IForm {
    firstName: string,
   lastName: string,

}
const ContextProvider : React.FC<IContext> = ({children}) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [changeFont, setChangeFont] = useState<boolean>(false);
    const [lightNumber, setLightNumber] = useState<number>(500);
    const [darkNumber, setDarkNumber] = useState<number>(600)

    const [formState, setFormState] = useState<IForm[]>([])
    const handleUpdateForm = (data : IForm) => {
        const newData = [...formState, data];

        const sortedData = newData.sort((a, b) => a.firstName.localeCompare(b.firstName))
        setFormState(sortedData)
    }
    const handleDarkMode = () => {
        setDarkMode(prevState => !prevState)
    }
    const handleChangeFont = () => {
        setChangeFont(prevState => !prevState)
    }

    const handleMakeLight  = () => {
        if (darkNumber <= 500) return
        setDarkNumber(500)
        if ( lightNumber <= 400) return
        setLightNumber(400)
    }
    const handleMakeDark = () => {
        if (lightNumber >= 700) return
        setLightNumber(700)
        if (darkNumber >= 700) return
        setDarkNumber(700)
    }
    const handleReset = () => {
        setChangeFont(false)
        setDarkMode(false)
        setLightNumber(500)
        setDarkNumber(600)
    }
    const content = {
        darkMode,
        changeFont,
        handleChangeFont,
        handleDarkMode,
        handleReset,
        darkNumber,
        lightNumber,
        handleMakeLight,
        handleUpdateForm,
        formState,
        handleMakeDark
    }
    return (
        <ContextApi.Provider value={content} >
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;