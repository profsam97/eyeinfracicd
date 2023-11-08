import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {confirmDelete, modalClose} from "@/store/modal";
import Container from "@mui/material/Container";
import {CircularProgress, Stack} from "@mui/material";
import {useRouter} from "next/router";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import TextInput from "./TextInput";
import {AddCircleOutlineOutlined, Cancel, Delete} from "@mui/icons-material";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {CreatePostDefaultValue} from "../Dash/Create";
import {useEffect, useState} from "react";
// import {useGetProduct} from "../../hooks/useDataFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";
import {useUpdatePost} from "../../hooks/UseDataFetch";
import baseUrl from "@/Helpers/BaseUrl";
import {startSnackBar} from "@/store/Utils";

interface modal {
    modal : {
        modalOpen: boolean,
        message: string,
        type: string,
        post_id: number
    }
}
const style  = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContents: 'center',
    height: 'auto',
    borderRadius: 5,
    p: 3,
};
const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required().min(8),
    image: yup.string()
})
export default function MainModal() {

    // const {data,  isLoading: loading, refetch} = useGetProduct(onSuccess);
    const post_id : number = useSelector((state: modal) => state.modal.post_id);

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState()
    const fetchProduct = async () => {
        setLoading(true)
        const response = await axios.get(`${baseUrl}/blog/${post_id}`)
        setData(response.data);
        console.log(data)
        setLoading(false)
    }

    const dispatch = useDispatch();
    const {handleSubmit, control, getValues, setValue, reset, formState: {isSubmitSuccessful}} = useForm<CreatePostDefaultValue>({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues:{
            title: '',
            image: '',
            description: '',
        }
    })
    useEffect(() => {
        if (data) {
            reset(data)
        }
    },[data, reset])
    const handleClose = () => dispatch(modalClose());

    const onSuccess = (data: any) => {
        dispatch(startSnackBar({snackBarOpen: true,message: 'Updated Successfully', severity: 'success'}))
        handleClose()
    }
    const {isLoading: isEditing, mutate: updateProduct} =  useUpdatePost(onSuccess);
    const open : boolean = useSelector((state: modal) => state.modal.modalOpen);
    const message : string = useSelector((state: modal) => state.modal.message);
    const type : string = useSelector((state: modal) => state.modal.type);
    useEffect(()=> {
        if (type === 'edit'){
            fetchProduct();
        }
    },[type])
    const router = useRouter();
    const onSubmit:SubmitHandler<CreatePostDefaultValue> = (data) => {
        const {title,description,image} = data;
        const updatedData = {title, description, image}
        updateProduct(updatedData)
        reset()
    }
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const confirmDeleteHandler = () => {
        setIsLoading(true);
        dispatch(confirmDelete())
        setTimeout(() => {
            setIsLoading(false)
            handleClose();
        },2000)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Container maxWidth={'sm'} component={'main'}>
                <Box sx={style}>
                    {type  === 'edit' &&
                        <>
                            {loading && <CircularProgress/>}
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                                <Controller
                                    name='title'
                                    control={control}
                                    render={({field , formState: {errors}}) => (
                                        <TextField
                                            required={true}
                                            fullWidth
                                            variant={'outlined'}
                                            error={!!errors?.title}
                                            helperText={!!errors?.title?.message}
                                            sx={{my:1}}
                                            {...field}
                                            id={'title'}
                                            type={'text'}
                                            label={'Title'}
                                            name={'title'}
                                            autoComplete={'title'}
                                        />
                                    )}
                                />
                                <Controller
                                    name='image'
                                    control={control}
                                    render={({field, formState: {errors}}) => (
                                        <TextInput
                                            data={errors?.image} field={field} id='image' required={true}
                                        />
                                    )}
                                />
                                <Controller
                                    name='description'
                                    control={control}
                                    render={({field, formState: {errors}}) => (
                                        <TextInput
                                            data={errors?.description} field={field} id='description'
                                        />
                                    )}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    disabled={isEditing}
                                    endIcon={<AddCircleOutlineOutlined/>}
                                >
                                    Update {isEditing && <CircularProgress/>}
                                    {/*Submit {isLoading && <CircularProgress/>}*/}
                                </Button>
                            </Box>
                        </>
                    }
                    {type === 'delete' &&
                        <>
                            <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
                                Are you Sure
                            </Typography>
                            <Stack direction='row' spacing={2} mt={5} sx={{justifyContent: 'space-between'}}>
                                <Button variant='contained' endIcon={<Cancel/>}
                                        onClick={handleClose} color='info' >Cancel</Button>
                                <Button variant='contained' endIcon={<Delete/>}
                                        color='error' onClick={confirmDeleteHandler} disabled={isLoading} >{!isLoading && 'Delete'}
                                    {isLoading && 'Deleting...'}</Button>
                            </Stack>

                        </>
                    }
                </Box>
            </Container>
        </Modal>
    );
}
