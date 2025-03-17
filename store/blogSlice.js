import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../global/status/statuses";
import API from "../src/http";
const blogSlice=createSlice({
    name: "blog",
    initialState: {
        data: null, 
        status: null ,   
     },
     reducers:{
        setBlog(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
     }
})

export const { setBlog, setStatus } = blogSlice.actions
export default blogSlice.reducer

export function addBlog(data){
    return async function addBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
      try{
        const response=  await API.post('blog',data,{
            headers:{
                "Content-Type":"multipart/form-data",
            }
        })
        if(response.status===201){
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
      }
    catch(error){
dispatch(setStatus(STATUSES.ERROR))
    }
    }
}
export function fetchBlog(){
    return async function fetchBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const response=await API.get('blog')
            if(response.status===200 && response.data.data.length>0){
                dispatch(setBlog(response.data.data))
                //console.log(response.data.data)
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else{
                dispatch(setStatus(STATUSES.ERROR))
            }
        }
        
        catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function fetchSingleBlog(id){
    return async function fetchSingleBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const response=await API.get(`blog/${id}`)
            if(response.status===200 && response.data){
                dispatch(setBlog(response.data.data))
               // console.log(response.data)
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else{
                dispatch(setStatus(STATUSES.ERROR))
            }
        }
        
        catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}



export function deleteBlog(id){
    return async function deleteBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try{
const response=await API.delete(`blog/${id}`)
if(response.status===200){
    dispatch(setStatus(STATUSES.SUCCESS))
}
else{
    dispatch(setStatus(STATUSES.ERROR))
}
        }
        catch(error){
dispatch(setStatus(STATUSES.ERROR))
        }
    }
}


export function editBlog(id,data){
    return async function editBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const response=await API.patch(`blog/${id}`,data)
        if(response.status===200){
            dispatch(setStatus(STATUSES.SUCCESS))
            dispatch(setBlog(response.data.data))
            console.log()
        }else{
            
        dispatch(setStatus(STATUSES.ERROR))
        }
    }
        catch(error){
dispatch(setStatus(STATUSES.ERROR))
        }
        
    }
}
