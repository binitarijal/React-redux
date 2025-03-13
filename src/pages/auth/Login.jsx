import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../../global/status/statuses'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../store/authSlice'

const Login = () => {
  
  const {status,user}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogin=(data)=>{
   dispatch(login(data))
   if (status === STATUSES.SUCCESS) {
    navigate('/blog/add')
  } else {
    navigate('/login')
  }
  } 
 
  return (
   
  <Form type='Login' user={user} onSubmit={handleLogin}/>
  )
}

export default Login