import { AddCircleOutlineOutlined } from '@mui/icons-material'
import { Button, CircularProgress, TextField, Typography } from '@mui/material'
import {Box, Stack} from '@mui/system'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import  {useRouter} from  'next/router';
// import { useNewPost } from '../../Hooks/useDataFetch'
import { useDispatch, useSelector } from 'react-redux'
// import { utilitiesAction } from '../../Store/utilities'

import * as yup from "yup";
import TextInput from "@/Components/Utils/TextInput";
import {useNewPost} from "@/hooks/UseDataFetch";
import {startSnackBar} from "@/store/Utils";
export interface CreatePostDefaultValue {
    title: string,
    description: string,
    image: string
}
const CreatePage:NextPage = () => {
    // interface Auth {
    //     auth: {
    //         username: string
    //     }
    // }

    const router = useRouter();

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required().min(8),
        image: yup.string()
    })
    const dispatch = useDispatch();

    const onSuccess = () => {
        dispatch(startSnackBar({message: 'Created Successfully', snackBarOpen: true, severity: 'success'}))
        // dispatch(utilitiesAction.snackStart(snackbar));
        router.push('/dash')
        reset()
    }
    const {isLoading, mutate: addPostHandler } = useNewPost(onSuccess);
    const onSubmit:SubmitHandler<CreatePostDefaultValue> = (data) => {
        const postData = {...getValues()}
        addPostHandler(postData)
    }

    const {handleSubmit, control, getValues, reset, formState: {isSubmitSuccessful}} = useForm<CreatePostDefaultValue>({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues:{
            title: '',
            image: '',
            description: '',
        }
    })
    // useEffect(() => {
    //     if(isSubmitSuccessful){
    //         // addPostHandler()
    //         reset()
    //     }
    // }, [isSubmitSuccessful, reset])
    return (
        <Box  sx={{ display: 'flex', flexDirection: 'column', minWidth: {sm : 500, md : 700, lg : 900, xl: 1000}}}>
                <Typography textAlign={'center'} variant='body1'>Create a new Post
                </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mx:3, mt: 1 }}>
                <Controller
                    name='title'
                    control={control}
                    render={({field, formState: {errors}}) => (
                        <TextInput
                            data={errors?.title} field={field} id='title'
                        />
                    )}
                />
                <Controller
                    name='image'
                    control={control}
                    render={({field, formState: {errors}}) => (
                        <TextInput
                            data={errors?.image} field={field} id='Paste an Image Link'  required={true}
                        />
                    )}
                />
                <Controller
                    name='description'
                    control={control}
                    render={({field, formState: {errors}}) => (
                        <TextField
                        required={true}
                        fullWidth
                        multiline={true}
                        rows={3}
                        variant={'outlined'}
                        error={!!errors?.description}
                        helperText={errors?.description?.message}
                        {...field}
                        sx={{my:1}}
                        id={'Description'}
                        type={'text'}
                        label={'Description'}
                        name={'Description'}
                        autoComplete={'Description'}
                        />
                    )}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={'gift'}
                    sx={{ mt: 3, mb: 2 , backgroundColor: '#EC9535',}}
                    disabled={isLoading}
                    endIcon={<AddCircleOutlineOutlined/>}
                >
                    Create {isLoading && <CircularProgress/>}
                </Button>
            </Box>
        </Box>
    )
}

export default CreatePage;