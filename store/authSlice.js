import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../global/status/statuses";
import API from "../src/http";
const authSlice=createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        status:null        
     },
     reducers:{
        setStatus(state, action) {
            state.status = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        }
     }
})

export const { setUser, setToken,setStatus } = authSlice.actions
export default authSlice.reducer

export function register(data){
    return async function registerThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
      try{
        const response=  await API.post('register',data)
        if(response.status===201){
            dispatch(setStatus(STATUSES.SUCCESS))
            dispatch(setUser(response.data.data))
            console.log(response.data.data)
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
      }
    catch(error){
dispatch(setStatus(STATUSES.ERROR))
    }
    }
}

export function login(data){
    return async function loginThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const response=await API.post('login',data)
        if(response.status===200 && response.data.token){
            const token=response.data.token
            dispatch(setStatus(STATUSES.SUCCESS))
            dispatch(setUser(response.data.data))
            dispatch(setToken(token))
        }else{
            
        dispatch(setStatus(STATUSES.ERROR))
        }
    }
        catch(error){
dispatch(setStatus(STATUSES.ERROR))
        }
        
    }
}