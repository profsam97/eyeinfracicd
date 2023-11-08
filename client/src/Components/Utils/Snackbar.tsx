import {Alert, Snackbar, useMediaQuery} from '@mui/material';
import { opendir } from 'fs';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {snackbarEnd} from "@/store/Utils";

interface rootState {
    utils : {
        message: string,
        snackBarOpen: boolean,
        severity: string,
    }
}
const Notify = () => {
    const open  = useSelector((state: rootState ) => state.utils.snackBarOpen);
    const message = useSelector((state: rootState) => state.utils.message);
    const severity = useSelector((state: rootState) => state.utils.severity);
    const dispatch = useDispatch();
    const handleClose = (event:React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(snackbarEnd())
    }
    const isMobile : boolean = useMediaQuery(('(max-width: 600px)'));

    return (

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal:  'right'
            }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            sx={{mb: isMobile ? 10 :  0}}
        >
            <Alert variant='filled' elevation={4} onClose={handleClose} severity={severity=== 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Notify