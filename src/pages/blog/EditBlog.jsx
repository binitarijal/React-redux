import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../../global/status/statuses'
import { editBlog, setStatus } from '../../../store/blogSlice'

const EditBlog = () => {

  const {status}=useSelector((state)=>state.blog)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleEditBlog=(data)=>{
   dispatch(editBlog(data))
  }
  useEffect(()=>{
    if(status===STATUSES.SUCCESS && formSubmitted){
      navigate('/')
      dispatch(setStatus(null))
    }
})


  return (
    <Layout>
        <Form type='Edit' onSubmit={handleEditBlog}/>
    </Layout>
  )
}

export default EditBlog