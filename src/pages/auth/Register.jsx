import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { register, setStatus } from '../../../store/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import STATUSES from '../../../global/status/statuses'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const {status}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleRegister=(data)=>{
   dispatch(register(data))
  }
  useEffect(()=>{
    if(status===STATUSES.SUCCESS){
       navigate('/login')
      dispatch(setStatus(null))
    }
},[status])
  
   
 
  return (
    <Form type='register' onSubmit={handleRegister}/>
  )
}

export default Register