import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        id:"1",
        title: "Learning Redux Toolkit",
        content : "It's easy "
    },
    {
        id:"2",
        title :"Subscibe",
        content:"Like and share this video"
    }
]

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers : {
        posteAdded(state,action){
            state.push(action.payload)
        }
    }

})
export const selectAllPosts = (state) => state.posts;
export const {posteAdded} = postSlice.actions
export default postSlice.reducer