"use client"; 

import { useAuth } from "@/context/AuthContext";
import FeedbackList from "./feedback";

const page = () => {
 
  
  const {isopenSidebar}=useAuth()





  return (
    <div className={`h-full ${isopenSidebar?"ml-64":""} overflow-auto`}>
      <div className="flex pl-2ml-64 h-full mt-3 rounded-md items-start flex-col gap-2 spa justify-around ">

          <h1 className='text-2xl text-black mt-4 font-bold'>Customer FeedBack</h1>
         <FeedbackList />
         </div>

    
     
    </div>
  );
};

export default page;
