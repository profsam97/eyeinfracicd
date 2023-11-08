import BlogPost from "@/Components/Blog/BlogPost";
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
    PreviewData
} from "next";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import baseUrl from "@/Helpers/BaseUrl";
import {ParsedUrlQuery} from "querystring";
import {Collection, Db, MongoClient, ObjectId} from "mongodb";
import {CreatePostDefaultValue} from "@/Components/Dash/Create";
import {Box} from "@mui/system";
import {useRouter} from "next/router";

interface IPost {
    title : string,
    description: string,}
const BlogPostPage : React.FC<IPost> = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    // const beginChange = useCallback(async () => {
    //      const post : any  = router.query.post
    //     const post_id = post?.split('-').shift();
    //      console.log(post_id)
    //     if (!post_id) return
    //     const response = await axios.get(`${baseUrl}/blog/${post_id}`);
    //     const data = response.data;
    //     setTitle(data.title)
    //     setDescription(data.description)
    //     setIsLoading(false)
    // },[isLoading])

    useEffect( () => {
        if (title) return
        const beginChange = async () => {
            const post : any  = router.query.post
            const post_id = post?.split('-').shift();
            console.log(post_id)
            if (!post_id) return
            const response = await axios.get(`${baseUrl}/blog/${post_id}`);
            const data = response.data;
            setTitle(data.title)
            setDescription(data.description)
            setIsLoading(false)
        }
    const timeout =  setInterval(() => {
            setIsLoading(prevState => !prevState)
        beginChange()
        },1000)
        setTimeout(() => {
            clearInterval(timeout)
        },4000)


        return () => clearTimeout(timeout)
    },[isLoading])
    return <BlogPost isLoading={isLoading} title={title} description={description}/>
}

export default BlogPostPage;