import React, { useState } from 'react'
import { Link,} from 'react-router-dom'

    const Form = ({type,onSubmit,user}) => {
      
        const [data,setData]=useState({
          username:'',
          email:'',
          password:''
        })
      
        const handleChange=(e)=>{
          const {name,value}=e.target
          setData({
            ...data,
            [name]:value
          })
        }
       const handleSubmit=(e)=>{
       e.preventDefault()
       onSubmit(data)
      
      }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md dark:bg-blue-900 dark:border-blue-700 mt-36">
    <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 text-center mb-4">
        {type==='Login' ? 'Login ' : 'Register'}
        <p>{type==='Login' && `Hello,${user?.username}` }</p>
    </h2>
    
   {type==='register' && (
     <div className="mb-4">
     <label htmlFor="username" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">UserName</label>
     <input onChange={handleChange} name='username' autoComplete='off' type="text" id="username" className="bg-blue-100 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
   </div>)}
    
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">Your email</label>
      <input onChange={handleChange} autoComplete='off' type="email" id="email" name="email" className="bg-blue-100 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"  required />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-900 dark:text-blue-200">Your password</label>
      <input onChange={handleChange} name='password' autoComplete='off' type="password" id="password" className="bg-blue-100 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-blue-800 dark:border-blue-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
   
    <button  type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition-all">{type==='Login' ? 'Login' : 'Register'}</button>
  <div>
    {type==='Login' ? (
<Link to='/register' className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline block text-center mt-2">Don't have an account? Register</Link>
    ) : (
      <Link to='/login' className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline block text-center mt-2">Already have an account? Login</Link>
    )
  }
  </div>
  </form>
  )
}

export default Form