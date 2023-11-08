import React from "react";
import {IForm} from "@/Content/ContextProvider";
interface IContext {
    darkMode : boolean,
    changeFont: boolean,
    darkNumber: number,
    lightNumber: number,
    handleDarkMode: () => void,
    handleChangeFont: () => void,
    handleReset: () => void,
    handleMakeLight: () => void,
    handleUpdateForm: (data : IForm) => void,
    formState: IForm[]
    handleMakeDark :  () => void
}
const ContextApi = React.createContext<IContext>({
        changeFont: false,
        darkMode: false,
    darkNumber: 600,
    lightNumber: 500,
    handleChangeFont: () => {},
    handleDarkMode: () => {},
    handleReset: ()  => {},
    handleMakeDark: () => {},
    handleUpdateForm: () => {},
    formState: [],
    handleMakeLight: () => {}
})

export default ContextApi