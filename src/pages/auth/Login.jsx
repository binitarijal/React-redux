import React from 'react'
import Form from './components/form/Form'
import { useSelector } from 'react-redux'

const Login = () => {
  const {user} =useSelector((state)=>state.auth)
  return (
   
  <Form type='Login' user={user}/>
  )
}

export default Login