"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "./Sidbar";

const NavBar: React.FC = () => {
  const router = useRouter();
  const { isLoggedIn, logoutUser,isopenSidebar,togglesidebar } = useAuth();
  
 

  const handleLoginRedirect = () => {
    router.push("/login");
  };
  return (
    <div className={`flex ${isopenSidebar?"ml-64":""}`}>
    <nav className="p-4 flex items-center justify-between bg-white shadow-md w-full">
      {/* add nave side bar */}
    <Sidebar isOpen={isopenSidebar} />
      <div
        className="flex items-center cursor-pointer"
       

      >
        {/* <img src={logo_url} alt="Logo" className="w-8 h-8" /> */}
        <button
          onClick={togglesidebar}
          className="text-black text-lg font-bold focus:outline-none rounded-md hover:opacity-5 "
        >
          ☰
        </button>
        <h3 className="ml-2 text-lg font-bold text-black">Blogee Admin</h3>
      </div>
      <div className="flex space-x-4 items-center">
        {/* <Link
          href="/blogs"
          className="text-black text-base hover:text-blue-500"
        >
          Blogs
        </Link> */}
        <Link
          // href={isLoggedIn?"/create-post":"/login"}
          href={"/create-post"}
          className="text-black text-base hover:text-blue-500"
        >
          Create Post
        </Link>
       
        {isLoggedIn ? (
          <LogoutButton onLogout={() => logoutUser()} />
        ) : (
          <button
            onClick={handleLoginRedirect}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        )}
      </div>
    </nav></div>
  );
};

export default NavBar;
