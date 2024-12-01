import Link from "next/link";
import React from "react";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Image from "next/image";
import {} from "../app/favicon.ico"

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-50  shadow-2xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64`}
    >
      <div className="p-4 ">
        <div className="flex gap-0">
        <Image
        src={"/favicon.ico"}
        alt="blogee"
        width={24}
        height={16}
        />

        <h2 className="text-1xl text-black  font-bold pl-1 pt-1">Blogee Admin</h2>
        </div>
        <hr className="mt-4 shadow-2xl"/>
        <ul className="mt-4 text-black ">
          <li className="mb-4 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2  ">
            <div className="flex  gap-1  ">
             <GridViewOutlinedIcon className=" font-normal "/>
            <Link href={"/Dashboard"} className="pl-1 pr-12 ">Dashboard</Link>
            </div>
          </li>
          <li className="mb-4 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2">
            <div className="flex  pr-0 gap-1">
              <RecentActorsOutlinedIcon/>
            <Link href="#" className="pl-1 pr-12">User list</Link>
            </div>
          </li>
          <li className="mb-4 rounded hover:shadow hover:bg-gray-200  hover:text-black py-2 px-2">
            <div className="flex gap-1">
            <ModeCommentOutlinedIcon/>
            <Link href={"/Feedbacklist"} className="pl-1 pr-12">Feedback list</Link>
            </div>
          </li>
          <li className="mb-4 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2  ">
            <div className="flex  gap-1  ">
             <AppsIcon className=" font-normal "/>
            <Link href={"/App-version"} className="pl-1 pr-12 ">App Version</Link>
            </div>
          </li>
          <li className="mb-4 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2">
            <div className="flex gap-1">
            <AssessmentOutlinedIcon/>

            <Link href="#" className="-pl-3 pr-8">Reports users list</Link>
            </div >
          </li>
          
          <li className="mb-4 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2">
          <div className="flex gap-1">

          <NotificationsOutlinedIcon className="pr-0 pl-0"/>

            <Link href="#" className="pl-1 pr-12">Send notification</Link>
          </div>
          </li>
          <li className="mb-4 ml-0 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2">
            <div className="flex mr-0 gap-1">
            <NotInterestedOutlinedIcon/>


            <Link href="#" className="-pl-4 pr-12">Ban/unbban user</Link>
            </div >
          </li>
          <li className="mb-4 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2  ">
            <div className="flex  gap-1  ">
             <GridViewOutlinedIcon className=" font-normal "/>
            <Link href={"/Blog"} className="pl-1 pr-12 ">Create Blog</Link>
            </div>
          </li>
          <li className="mb-4 ml-0 rounded hover:shadow hover:bg-gray-200 hover:text-black py-2 px-2 mt-3">
            <div className="flex mr-0 gap-1">
            <SettingsOutlinedIcon />


            <Link href="#" className="-pl-4 pr-12">Settings</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
