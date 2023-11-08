// @ts-ignore
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type initialState = {
    message: string,
    modalOpen: boolean,
    type: string,
    isDeleting: boolean,
    post_id: number | null
}

type editDelete = {
    post_id: number | null
    type: string,
}

const initialState : initialState = {
    modalOpen: false,
    message: '',
    type: '',
    post_id: null,
    isDeleting: false
}

const modal = createSlice({
    initialState,
    name: 'modal',
    reducers: {
        modalUserOpen(state: initialState, action: any){
            state.modalOpen = true;
            state.message = action.payload.message;
            state.type = action.payload.type
        },
        deletePostById(state: initialState, action: PayloadAction<editDelete>){
            state.modalOpen = true;
            state.type = action.payload.type;
            state.post_id = action.payload.post_id
        },
        modalClose(state:  initialState){
            state.modalOpen = false;
            state.type = '';
            state.post_id = null
        },
        confirmDelete(state: initialState){
            state.isDeleting = true;
        },
        isDeleted(state: initialState){
            state.isDeleting = false;
            state.post_id = null
        },
        isEditing(state: initialState, action: PayloadAction<editDelete>){
            state.modalOpen = true;
            state.type = action.payload.type;
            state.post_id = action.payload.post_id
        },
    }
})
export const { modalUserOpen,isEditing,  modalClose, confirmDelete, isDeleted, deletePostById } = modal.actions;
export default modal.reducer;
