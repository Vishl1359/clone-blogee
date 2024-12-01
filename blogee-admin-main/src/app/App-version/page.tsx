// app/page.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import { version } from "os";
import { useState } from "react";

type AppVersion = {
  version: string;
  date: string;
  isUpdateAvailable: boolean;
};

export default function AppVersion() {
  const [month, setMonth] = useState<string>("January");
  const [year, setYear] = useState<number>(2024);
  const {isopenSidebar}=useAuth()
  const years=[ "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",]

  const latestVersion: AppVersion = {
    version: "3.15",
    date: "December 24",
    isUpdateAvailable: true,
  };

  const olderVersions: AppVersion[] = [
    { version: "3.15", date: "November 24", isUpdateAvailable: false },
    { version: "3.15", date: "August 24", isUpdateAvailable: false },
    { version: "3.15", date: "August 24", isUpdateAvailable: false },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col items-center  h-full ${isopenSidebar?"ml-72":""} overflow-auto`}>
      <div className="max-w- w-full bg-white shadow-md rounded-lg p-6 mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">App Version</h1>

        {/* Month and Year Selectors */}
        
        <div className="flex space-x-4 mb-[6rem]  ">
          <div className="flex mr-[8rem] pl-14">
            <label htmlFor="month" className="block text-gray-600 text-lg font-bold mt-4 ">
              Month-
            </label>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full  border-none text-gray-600   text-lg mt-4 "
            >
              {years.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mr-[8rem]">
            <label htmlFor="year" className="block text-gray-600 text-lg font-bold mt-4">
              Year-
            </label>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full   border-none text-gray-600 text-lg mt-4 "
            >
              {Array.from({ length: 5 }, (_, i) => 2024 - i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Latest Version */}
        <div className="mb-5 mt-2  flex-row h-[21rem] ">
          <h1 className="text-gray-800 ml-2 font-bold  text-lg  pl-14">Latest version</h1>
          <div className="flex-row align-middle mt-8 ml-2 h-[11rem] w-[22rem] pt-8 pl-14">
            <h1 className="text-gray-600 text-xl font-bold">App Version</h1>
            <div className="flex justify-between w-[16rem] h-16 mt-5">
                <div>
                    <p className="text-lg font-medium text-blue-900">Version{latestVersion.version}</p>
                    <p className="text-gray-500 text-sm">{latestVersion.date}</p>
                </div>
                <div>
                {latestVersion.isUpdateAvailable && (
              <button className="bg-blue-900 text-white px-4 py-2 rounded-2xl mt-2 text-sm font-medium hover:bg-blue-600">
                Update
              </button>
            )}
                </div>
            </div>
            
            </div>           
        </div>

        {/* Older Versions */}
        <div>
          <h2 className="  text-gray-800 mb-3 font-bold  text-lg  pl-14">Older versions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 pl-14">
            {olderVersions.map((version, index) => (
              <div
                key={index}
                className="shadow-sm rounded-lg p-4 flex-row justify-between items-center"
              >
                  <h3 className="text-gray-600 text-xl font-bold">App Version</h3>
              
                  <div className="flex justify-between w-[16rem] h-16 mt-5">
                <div>
                    <p className="text-lg font-medium text-blue-900">Version{latestVersion.version}</p>
                    <p className="text-gray-500 text-sm">{latestVersion.date}</p>
                </div>
               
            </div>
               
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
