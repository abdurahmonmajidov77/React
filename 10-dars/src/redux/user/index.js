import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { API_URL } from "../../utils/api";

export const GetUser = createAsyncThunk("user/get" , async () => {
    return await axios.get(API_URL).then(res => res.data)
})
export const PostUser = createAsyncThunk("user/post" , async (body) => {
    return await axios.post(API_URL,body).then(res => res.data)
})
const UserSlice = createSlice({
    name: "user",
    initialState:{
        getUser :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postUser :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetUser.pending] : (state, action) => {
            state.getUser.Loading = true;
            state.getUser.Error = false;
            state.getUser.Success = false;
        },
        [GetUser.fulfilled] : (state, action) => {
            state.getUser.Loading = false;
            state.getUser.Error = false;
            state.getUser.Success = true;
            state.getUser.Data = action.payload
        },
        [GetUser.rejected] : (state, action) => {
            state.getUser.Loading = false;
            state.getUser.Error = true;
            state.getUser.Success = false;
            state.getUser.Data = action.payload
        },
        [PostUser.pending] : (state, action) => {
            state.postUser.Loading = true;
            state.postUser.Error = false;
            state.postUser.Success = false;
        },
        [PostUser.fulfilled] : (state, action) => {
            state.postUser.Loading = false;
            state.postUser.Error = false;
            state.postUser.Success = true;
            state.postUser.Data = action.payload
        },
        [PostUser.rejected] : (state, action) => {
            state.postUser.Loading = false;
            state.postUser.Error = true;
            state.postUser.Success = false;
            state.postUser.Data = action.payload
        }
    }
})
export const {} = UserSlice.actions;
export default UserSlice.reducer