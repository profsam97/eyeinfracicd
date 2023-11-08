import axios from "axios";
import {useMutation, useQuery} from "react-query";
import {useSelector} from "react-redux";
import modal from "@/store/modal";
import post from "@/pages/blog/[post]";
import baseUrl from "@/Helpers/BaseUrl";

interface ICreate {
    title: string,
    description: string,
    image: string
}
export function useNewPost (onSuccess: any) {
    const newPostHandler = async(data: ICreate) => {
        const response = await axios.post(`${baseUrl}/blog`, data)
        return response.data;
    }
    return useMutation(newPostHandler, {
        onError: async() => {
        },
        onSuccess
    });
}
export default function useDataFetch (onSuccess: any) {
    const fetchPosts = async () => {
        const response = await axios.get(`${baseUrl}/blogs`);
        return response.data;
    }
    return useQuery('getBlogs', fetchPosts, {
        onSuccess,
        onError: async (data: any) => {
            return data;
        },
    });
}
interface modal {
    modal : {
        post_id: number
    }
}

export function useUpdatePost(onSuccess: any) {

    const post_id : number = useSelector((state: modal) => state.modal.post_id);

    const updatePostHandler = async(data: any) => {
        const response = await axios.patch(`${baseUrl}/blog/${post_id}`, data)
        return response.data;
    }
    return useMutation(updatePostHandler, {
        onError: async(data: object) => {
            console.log(data)
        },
        onSuccess
    });
}
export function useDeletePost () {
    type defaultType = {
        post_id: number
    }
    const deletePostHandler = async(data: defaultType) => {
        const response = await axios.delete(`${baseUrl}blog/${data.post_id}`)
        return response.data;
    }
    return useMutation(deletePostHandler, {
        onError: async() => {
        },
    });
}