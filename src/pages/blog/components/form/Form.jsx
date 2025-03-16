import React, { useState } from 'react'

const Form = ({type,onSubmit}) => {
	const[blog,setBlog]=useState({
		title:"",
		subtitle:"",
		description:"",
		category:"",
		image:""
	})
	const handleChange=(e)=>{
		const{name,value}=e.target
		setBlog({
			...blog,
			[name]: name==='image'?e.target.files[0]:value
		})
	}
   const handleSubmit=(e)=>{
	e.preventDefault();
	onSubmit(blog)

	}
  return (
	<form onSubmit={handleSubmit}>
    <div className="flex justify-center  w-screen h-screen">

	<div className="container my-3 px-4 lg:px-20 ">

		<div className="w-full p-8 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mx-25">
			<div className="flex">
				<h1 className="font-bold uppercase text-5xl">{type} <br /> Blog</h1>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input name='title' onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Title*" />
				<input onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" name='subtitle' placeholder="Subtitle*" />
				<input  name='image'onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"  />
				<input name='category'onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Category*" />
        </div>
				<div className="my-4">
					<textarea name='description' onChange={handleChange} placeholder="Description*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Submit
          </button>
				</div>
			</div>
    </div>
</div>
</form>
  )
}

export default Form