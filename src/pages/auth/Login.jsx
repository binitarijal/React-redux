import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../../global/status/statuses'
import { useNavigate } from 'react-router-dom'
import { login, setStatus } from '../../../store/authSlice'

const Login = () => {
  const {status,user,token}=useSelector((state)=>state.auth)
  //console.log(user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogin=(data)=>{
   dispatch(login(data))
  } 
  useEffect(()=>{
    if(status===STATUSES.SUCCESS){
      localStorage.setItem('token',token)
     navigate('/blog/add')
      dispatch(setStatus(null))
    }
},[status])
 
  return (
   
  <Form type='Login' user={user} onSubmit={handleLogin}/>
  )
}

export default Login