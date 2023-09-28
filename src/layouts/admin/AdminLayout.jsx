import React from 'react'
import SideBar from './SideBar'

import { Outlet } from "react-router-dom";
import TopBar from '../main/TopBar';

export default function AdminLayout() {
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="col-span">
          <TopBar />
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-1 h-screen bg-gray-100">
          <SideBar />
        </div>
        <div className="col-span-4 container mx-auto p-12">
          <div className="bg-gray-100 p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
