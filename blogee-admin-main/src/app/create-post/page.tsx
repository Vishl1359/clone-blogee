"use client";
import { createPost } from "@/utils/api";
import { fromJSON } from "postcss";
import { title } from "process";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  title: string;
  image: string;
  description: string;
  post_type: string;
  category: string;
  source: string;
}

const Page: React.FC = () => {
  const types = ["text", "both"];
  
  const categories = [
    "Language",
    "Literature",
    "Life Style",
    "Design",
    "Food & Cooking",
    "Sports",
    "Education",
    "Technology",
    "Business & Entrepreneurship",
    "Health & Wellness",
  ];
  const [formData, setFormData] = useState<FormData>({
    title: "",
    image:"",
    description: "",
    post_type: "",
    category: "",
    source: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {name,value}=e.target
  //  limit text and discription character
    if(name==="title" && value.length >=30){
      toast("Title can not exceed 30 charcter",{
        type:"error",
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    if(name==="description"&&formData.post_type==="image"&&value.length>=300  ){
     toast("Discription can not exceed 300 charcter",{
        type:"error",
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else if(name==="description"&& value.length>=350){
      toast("discription can not exceed 350 charcter",{
        type:"error",
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    console.log(token,"token....")
    if (token) {
      const response = await createPost(formData, token);
      console.log(response,"response")
    } else {
      alert("Error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="type"
            className="block text-gray-800 font-semibold mb-2"
          >
            Type
          </label>
          <select
            id="post_type"
            name="post_type"
            value={formData.post_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select type
            </option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-gray-800 font-semibold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
          {formData.post_type==="both"?(
                    <div className="mb-6">

             <label
             htmlFor="title"
             className="block text-gray-800 font-semibold mb-2"
           >
             Title
           </label>
           
           <input
             type="text"
             id="title"
             name="title"
             value={formData.title}
             maxLength={30}
             onChange={handleChange}
             placeholder="Enter title"
             required
             className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
                              <label
            htmlFor="image"
            className="block text-gray-800 font-semibold mb-2"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter title"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
                     </div>

          ):(
            <div className="mb-6">
                <label
             htmlFor="title"
             className="block text-gray-800 font-semibold mb-2"
           >
             Title
           </label>
           
           <input
             type="text"
             id="title"
             name="title"
             value={formData.title}
             maxLength={30}
             onChange={handleChange}
             placeholder="Enter title"
             required
             className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />

            </div>
          )}
         
                <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          
            
         

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-800 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            maxLength={formData.post_type==="image"?300:350}
            onChange={handleChange}
            placeholder="Enter description"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-gray-800 font-semibold mb-2"
          >
            Source
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            placeholder="Enter Source"
            // required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Page;
