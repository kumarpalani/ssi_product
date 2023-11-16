import React from 'react'
import SideBar from '../component/SideBar'
import { Outlet } from 'react-router-dom'

const SideBarLayout = () => {
  return (
    <>
    <SideBar/>
    <Outlet/>
    </>
  )
}

export default SideBarLayout