import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../../global/status/statuses'
import { addBlog } from '../../../store/blogSlice'
import { setStatus } from '../../../store/blogSlice'

const AddBlog = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {status}=useSelector((state)=>state.blog)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleAddBlog=(data)=>{
   dispatch(addBlog(data))
   setFormSubmitted('true')
  }
  useEffect(()=>{
    if(status===STATUSES.SUCCESS && formSubmitted){
      navigate('/')
      dispatch(setStatus(null))
    }
},[status])
  return (
  <Layout>
	<Form type='Create' onSubmit={handleAddBlog}/>
  </Layout>
  )
}

export default AddBlog