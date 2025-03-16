import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { fetchBlog } from '../../../store/blogSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch=useDispatch()
  const {data:blog,status}=useSelector((state)=>state.blog)
  //console.log(blog)
  useEffect(()=>{
    dispatch(fetchBlog())
  },[dispatch])
  return (
   <Layout>
  <div className='flex flex-wrap justify-center gap-5 mt-6'>
        {status === 'loading' && (
          <div className="text-center w-full">
            <p>Loading blogs...</p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="text-center text-red-500 w-full">
            <p>Error loading blogs. Please try again.</p>
          </div>
        )}
        
        {blog && blog.length > 0 ? (
          blog.map((blogItem) => (
            <Card key={blogItem._id} blog={blogItem} />
          ))
        ) : status === 'success' && (
          <div className="text-center w-full">
            <p>No blogs available</p>
          </div>
        )}
      </div>
   </Layout>
  )
}

export default Home