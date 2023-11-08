import {
    Button,
    CircularProgress,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useCallback, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deletePostById, isDeleted, isEditing} from "@/store/modal";
import useDataFetch, {useDeletePost} from "../../hooks/UseDataFetch";
// @ts-ignore
import slug from 'slug';
import baseUrl from "@/Helpers/BaseUrl";
import axios from "axios";
import {startSnackBar} from "@/store/Utils";

interface modal {
    modal : {
        isDeleting: boolean,
        post_id: number
    }
}
const ViewPage: NextPage = () => {
    const dispatch = useDispatch()
    const isDeleting : boolean = useSelector((state: modal) => state.modal.isDeleting);
    const post_id = useSelector((state: modal) => state.modal.post_id);
    const {mutate: deletePost, isError : isDeleteError, error} = useDeletePost();
    const [posts, setPosts] = useState<any[]>([])
    const onSuccess = (data : any[]) => {
        setPosts(data)
    }
    const { refetch, isFetching, isError, isLoading, isFetched} = useDataFetch(onSuccess);
    // const posts: viewPostDefaultValue[] = getPosts?.data;

    const deletePostHandler = useCallback (async () =>{
        if(isDeleting){
             await axios.delete(`${baseUrl}/blog/${post_id}`)
            // if (response.statusText !== 'OK') return
            // console.log('something')
            // dispatch(startSnackBar({snackBarOpen: true, severity: 'warning', message: 'Deleted Successfully'}))
            // setTimeout(() => {
            //     refetch()
            //     dispatch(isDeleted())
            // }, 2000);
        }
    },[isDeleting])
    useEffect(() => {
        deletePostHandler()
    }, [isDeleting])
    const router = useRouter();

    const retryHandler = () => {
        refetch()
    }
    useEffect(()=> {
        retryHandler()
    },[post_id])
    return (
        <Box  sx={{ display: 'flex', flexDirection: 'column', minWidth: {sm : 500, md : 700, lg : 900, xl: 1000}}}>
                <Typography  textAlign={'center'} variant='h6'>All Posts
                </Typography>
            {isFetching &&   <Typography  textAlign={'center'} variant='body1'> <CircularProgress/> </Typography>}
            {isFetched && !isError && posts?.length === 0 &&
                <Stack direction='row' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} mt={2}>
                    <Typography variant="body1" textAlign={'center'} color="text.secondaty">No products Yet. <Paper elevation={0} sx={{color:'blue', display: 'inline'}}> <Link  href='/dash/create/'> click here to post </Link></Paper></Typography>
                </Stack> }
            {isError && <Typography variant='body2' textAlign={'center'}>Opps Something went wrong
                <Button variant='outlined' size={'small'} sx={{mx:2}} onClick={retryHandler} >Click here to retry</Button></Typography>}
            {!isLoading && posts?.length !== 0 &&
                <TableContainer component={Paper} sx={{mt:2}}>
                    <Table sx={{minWidth: 650, background: 'dark'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product title </TableCell>
                                <TableCell >Image </TableCell>
                                <TableCell >Edit </TableCell>
                                <TableCell >View</TableCell>
                                <TableCell >Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts?.map( ({title, image, _id}: {image : string ,  _id : number, title : string} , index : undefined | number) => (
                                <TableRow key={index}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{ title}</TableCell>
                                    <TableCell ><img  src={image === '' ? 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' : image}  width={100} height={70} />    </TableCell>
                                    <TableCell ><Button variant='contained' color='primary'  onClick={() => dispatch(isEditing({post_id: _id,  type: 'edit'}))} >edit</Button></TableCell>
                                    <TableCell ><Button variant='contained' color='info' onClick={() => router.push('/blog/[slug]', `/blog/${_id}-${slug(title)}` )}  >View</Button></TableCell>
                                    <TableCell ><Button variant='contained' color='error' onClick={() => dispatch(deletePostById({post_id: _id, type: 'delete'}))} >Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </Box>
    )
}
export default ViewPage
