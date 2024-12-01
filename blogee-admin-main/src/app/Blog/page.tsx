"use client"
import { CreateBlog } from '@/utils/api';
import React, { useState } from 'react'


interface BlogData {
 
  title:string;
  subtitle:string;
  language:string;
  description:string;
  image:string|null;
  url:string;
  thumbnail:string;
  keywords:string;

}

const Page:React.FC = () => {
  const initialState: BlogData = {
    title: "",
    subtitle: "",
    language: "",
    description: "",
    image: null,
    url: "",
    thumbnail: "",
    keywords: "",
  };
  const [blogData,setblogData]=useState<BlogData>(initialState)
  const Language=["English","Hindi"]
  const handleChange =(  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >)=>{
    setblogData({
      ...blogData,[e.target.name]:e.target.value
    })
    
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    if (token) {
      const response = await CreateBlog(blogData, token);
      setblogData(initialState)
      console.log(response,"response")
    } else {
      alert("Error");
    }

    
  };


  return (
   <main  className="flex min-h-screen flex-col items-center justify-between p-24">
    <form
    onSubmit={handleSubmit}
     className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-6">
      <label
       htmlFor="title"
       className="block text-gray-800 font-semibold mb-2">
        Title
      <input
             type="text"
             id="title"
             name="title"
             maxLength={30}
             
             value={blogData.title}
             onChange={handleChange}
             placeholder="Enter title"
             required
             className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
             
            
          </label>

      </div>
      <div className="mb-6">
          <label
          htmlFor="title"
          className="block text-gray-800 font-semibold mb-2">
            Subtitle
          <input
             type="text"
             id="subtitle"
             name="subtitle"
             value={blogData.subtitle}
             onChange={handleChange}
             maxLength={30}
             placeholder="Enter Subtitle"
             required
             className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
             
          </label>
          </div>
          <div className="mb-6">
          <label   htmlFor="title"
          className="block text-gray-800 font-semibold mb-2">
            Language

          </label>
          <select
            id="language"
            name="language"
            value={blogData.language}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Language
            </option>
            {Language.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          </div>
          <div className="mb-6">
          <label  htmlFor="Description"
          className="block text-gray-800 font-semibold mb-2">
            Description
          <textarea
            id="description"
            name="description"
            value={blogData.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          </label>
          </div>
          <div className="mb-6">
          <label htmlFor="Image"
          className="block text-gray-800 font-semibold mb-2">
            Image
          <input
            type="file"
            id="image"
            name="image"
            value={blogData.image}
            onChange={handleChange}
           
            placeholder="Enter Image"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
            
          </label>
          </div>
          <div className="mb-6">
          <label htmlFor="Url"
          className="block text-gray-800 font-semibold mb-2">
            Url
          <input
            type="text"
            id="url"
            name="url"
            value={blogData.url}
            onChange={handleChange}
            
           
            placeholder="Enter Url"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
            
          </label>
          </div>
          <div className="mb-6">
          <label htmlFor="Thumbnail"
          className="block text-gray-800 font-semibold mb-2">
            Thumbnail
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={blogData.thumbnail}
            onChange={handleChange}
           
            placeholder="Enter Thumbnail"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          </label>
          </div>
          <div className="mb-6">
          <label  htmlFor="keywords"
          className="block text-gray-800 font-semibold mb-2">
            Keyword
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={blogData.keywords}
            onChange={handleChange}
           
            placeholder="Enter Keyword"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </label>
          </div>
        
          <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>

          


    </form>

   </main>
  )
}

export default Page
