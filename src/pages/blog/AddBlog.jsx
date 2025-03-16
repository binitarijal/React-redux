import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../../global/status/statuses'
import { addBlog } from '../../../store/blogSlice'
import { setStatus } from '../../../store/blogSlice'

const AddBlog = () => {
  const {status}=useSelector((state)=>state.blog)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleAddBlog=(data)=>{
   dispatch(addBlog(data))
  }
  useEffect(()=>{
    if(status===STATUSES.SUCCESS){
      navigate('/')
      dispatch(setStatus(null))
    }
})
  return (
  <Layout>
	<Form type='Create' onSubmit={handleAddBlog}/>
  </Layout>
  )
}

export default AddBlog