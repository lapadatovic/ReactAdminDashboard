import React from 'react'
import './topbar.css'
import { DiAptana } from "react-icons/di"
import { HiOutlineUser ,HiOutlineBellAlert, HiOutlineGlobeAlt } from 'react-icons/hi2'
export default function Topbar() {
  return (
    <div className='topbar-container'>
      <div className="topbar-wrapper">
        <div className="topbar-left">
         <HiOutlineUser className='logo'/>
          <p className='logo-text'>Admin Panel</p>
        </div>
        <div className="topbar-right">
          <div className="topbar-right-icons-container">
              < HiOutlineBellAlert className='topbar-right-icon'/>
              <span className='topbar-icon-badge'>1</span>
          </div>
          <div className="topbar-right-icons-container">
              < HiOutlineGlobeAlt className='topbar-right-icon'/>
              <span className='topbar-icon-badge'>2</span>
          </div>
          <div className="topbar-right-icons-container">
              < DiAptana className='topbar-right-icon'/>
              <span className='topbar-icon-badge'>2</span>
          </div>
          <img className="topbar-admin-img" src="assets/person/8.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}
