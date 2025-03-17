import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../../global/status/statuses'
import { editBlog, setStatus } from '../../../store/blogSlice'

const EditBlog = () => {
  const[formSubmitted,setFormSubmitted]=useState(false)
const {id}= useParams()
//console.log(id)
  const {status,blog}=useSelector((state)=>state.blog)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleEditBlog=(data)=>{
   dispatch(editBlog(id,data))
   setFormSubmitted('true')
  }
  useEffect(()=>{
    if(status===STATUSES.SUCCESS && formSubmitted){
      navigate('/')
      dispatch(setStatus(null))
    }
},[status,formSubmitted])


  return (
    <Layout>
        <Form type='Edit' onSubmit={handleEditBlog}/>
    </Layout>
  )
}

export default EditBlog