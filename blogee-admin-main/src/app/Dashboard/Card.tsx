import { useEffect, useState } from "react";


type UserCardProps = {
    title: string;
    value: number|string;
    change: string;
    changeDirection: 'up' | 'down';
    date:string;
  };
  
  const UseryCard = ({ title, value, change, changeDirection,date }: UserCardProps) => {
    return (
     
         <div className="p-4 border rounded-lg  bg-white flex flex-col justify-evenly mb-4 shadow-2xl overflow-auto">
         <h3 className="sm:text-sm lg:text-lg md:font-medium  text-gray-700">{title}</h3>
         <div className="sm:text-2xl lg:text-4xl font-bold text-gray-900">{value}</div>
         <div className={`sm:text-sm lg:text-lg  ${changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
           {changeDirection === 'up' ? '↑' : '↓'} {change}
         </div>
         <div className="sm:text-sm lg:text-lg md:font-normal  text-gray-700">{date}</div>

       </div>
    );
  };

  type FetchData = {
    totalUsers: number;
    totalPosts: number;
    totalReports: number;
    totalPostsSahres: number;
    
  };
  
  const UserCountCard = () => {
    const [totaldata,setdata]=useState<FetchData|null>(null)
    
  useEffect(() => {
  
    const fetchdata = async () => {
     
      
      try {
        let token =localStorage.getItem("authToken");
        console.log(token,"sdfaf")
        const response = await fetch("https://api-74opign4ma-uc.a.run.app/api/admin/get_totals",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",  // Optional, but typically good practice
            "Authorization": `${token}`, // Add the token to the Authorization header
          }, 
        });
    
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Server Error:", errorText); // Log server error details
          throw new Error(`Error: ${response.status}`);; // Handle error status codes
        }
    
        const result = await response.json();
        console.log(result, "data");
        setdata(result.data)
        console.log(totaldata?.totalPosts,"....")
        
      
    
      } catch (error) {
        console.error("Failed to fetch data:", error); // Log the error
      }
    };
    fetchdata()
  }, []);

    
    return (
      <div className=" w-full h-64 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <UseryCard title="Total Users" value={totaldata?.totalUsers||0} change="5%" changeDirection="up" date=" last 30 day " />
        <UseryCard title="Total Posts" value={totaldata?.totalPosts||0} change="2.2%" changeDirection="up" date=" last 10 day "/>
        <UseryCard title="Total Reports" value={totaldata?.totalReports||0} change="9.3%" changeDirection="up" date=" last 60 day "/>
        <UseryCard title="Total PostShare " value={totaldata?.totalPostsSahres||0} change="9.3%" changeDirection="up" date=" last 20 day "/>

      </div>
    );
  };
  
  export default UserCountCard;
  