"use client"


import { useEffect, useState } from 'react';
import Image from 'next/image';

// Define the type for the feedback data
type Feedback = {
  id: number;
  username: string;
  feedback: string;
  createdAt: number|string;
  opinion:string;
};

const daysAgo = (createdAt: string | number): string => {
    const createdAtTime = typeof createdAt === 'string' ? new Date(createdAt).getTime() : createdAt;
    const currentTime = Date.now();
    const daysDiff = Math.floor((currentTime - createdAtTime) / (1000 * 60 * 60 * 24));
    return daysDiff === 0 ? "Today" : `${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
  };

// The FeedbackList component
const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]); 
  

useEffect(()=>{
    const fetchdata = async () => {
        const bodydata={
            
                "start":"2024-08-10",
                "end":"2024-08-12"  
             
        }
        try {
          let token =localStorage.getItem("authToken");
          const response = await fetch("https://app-74opign4ma-uc.a.run.app/api/admin/get_feedbacks",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",  // Optional, but typically good practice
              "Authorization": `${token}`, // Add the token to the Authorization header
            },
            body: JSON.stringify(bodydata)
          });
      
          if (!response.ok) {
            throw new Error("Failed to fEEDBACK");
          }
      
          const data = await response.json();
        //   console.log(data, "data");
          setFeedbacks(data.data)
      
        } catch (error) {
          console.error("Failed to fetch data:", error); // Log the error
        }
       
      };
      fetchdata()

    
},[])

  return (
    <div className="border rounded-lg p-4 w-[105rem] mx-auto ">
    <div className="space-y-6 max-h-96 overflow-y-auto">
      {feedbacks.map(({ id, username, feedback, createdAt,opinion }) => (
        <div key={id} className="flex space-x-4 flex-col">
            <div className='flex  gap-2 '>
          <div>
            <Image
              src={"https://wallpapercave.com/wp/wp13760757.jpg"}
              alt={"dragon ball image"}
              width={50}
              height={40}
              className="rounded-full w-12 h-12"
            />
          </div>
            <div className="flex items-center gap-1 flex-col">
              <p className=" text-gray-900  font-bold">{username}</p>
              <p className="text-xs text-gray-500">{daysAgo(createdAt)}</p>
            </div>
            </div >
            <div className='flex flex-col justify-start  pr-0 mr-0'>
            <p className="text-gray-600 mt-2 pl-0 text-xs mr-0">{feedback}</p>
            <p className="text-gray-600 mt-2 pl-0 text-xs">{opinion}</p>
             
             </div>
          </div>
      ))}
    </div>
  </div>

  )}
    

export default FeedbackList;

