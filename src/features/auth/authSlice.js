import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://calcolo-backend-yex2.onrender.com/api/users'
// Get user from sessionStorage
const user = JSON.parse(sessionStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register user
export const register = createAsyncThunk('/auth/register', async(user, thunkAPI) => {
        try {
            console.log(user);
            await axios.post(API_URL + "/", user)
                .then(res=>{
                    console.log(res.data);
                    sessionStorage.setItem('user', JSON.stringify(res.data))
                })
                .catch(err=>console.log(err))
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Login user
export const login = createAsyncThunk('/auth/login', async(user, thunkAPI)=> {
    try {
        await axios.post(API_URL + "/login", user)
            .then(res=>{
                sessionStorage.setItem("myToken", JSON.stringify(res.data.token))
            })
            .catch(err=>console.log(err))
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('/', async()=>{
    sessionStorage.removeItem("myToken")
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
              })
              .addCase(login.pending, (state) => {
                state.isLoading = true
              })
              .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
              })
              .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
              })
              .addCase(logout.fulfilled, (state) => {
                state.user = null
              })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer