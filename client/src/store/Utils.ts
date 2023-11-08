import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUtils {
    message: string,
    snackBarOpen: boolean,
    severity: string
}

const initialState : IUtils = {
    message: '',
    snackBarOpen: false,
    severity: 'success'
}

const utils = createSlice({
    name: 'utils',
    initialState,
    reducers : {
        startSnackBar (state: IUtils, action: PayloadAction<IUtils>) {
            state.message = action.payload.message;
            state.severity = action.payload.severity;
            state.snackBarOpen = true
        },
        snackbarEnd (state: IUtils) {
            state.message = '';
            state.snackBarOpen = false;
        }
    }
})
export const {startSnackBar, snackbarEnd} = utils.actions

export default utils.reducer;
