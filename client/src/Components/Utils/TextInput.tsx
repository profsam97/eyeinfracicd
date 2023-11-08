import React from 'react';
import TextField from "@mui/material/TextField";
type data = {
    message: string
}
interface Input {
    id: string,

    field: []
    data: data,
    type: string,
    required: boolean,
    multiline: boolean,
    row: number
}
const TextInput : React.JSXElementConstructor<any> = ({id, field, data, type, required, multiline, row}: Input) => {

    return (
        <>
            <TextField
                required={!required}
                fullWidth
                multiline={!multiline}
                rows={row}
                variant={'outlined'}
                error={!!data}
                helperText={data?.message}
                {...field}
                sx={{my:1}}
                id={id}
                type={type? type : 'text'}
                label={id}
                name={id}
                autoComplete={id}
            />
        </>
    )
};

export default TextInput;