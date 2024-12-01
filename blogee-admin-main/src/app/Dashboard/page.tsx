"use client"
import React from 'react'
import UserCountCard from './Card'
import BalanceChart from './Chart'
import RecentCountUser from './Balancesheet'
import { useAuth } from '@/context/AuthContext'

const page = () => {

    const {isopenSidebar}=useAuth()
  return (
    <div className={`h-full ${isopenSidebar?"ml-72":""} overflow-auto`}>
    <h1 className='text-2xl text-black mt-4 font-bold   '>Dashboard</h1>
    <div className='flex pl-2ml-64 h-full mt-3 rounded-md items-start flex-col gap-2 spa justify-around '>
        <h1 className='text-2xl text-black mt-4 flex-initial mr-[61.25rem] bg-white'>User count</h1>
        <UserCountCard />
        <BalanceChart/>
        <RecentCountUser/>
    </div>
    </div>
  )
}

export default page
