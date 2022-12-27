import React from 'react'
import './sidebar.css'
import {MdShowChart,MdLineStyle,MdAttachMoney,MdFeedback,MdOutlineMessage,MdReportProblem } from 'react-icons/md'
import {FaChartLine, FaRegUser} from 'react-icons/fa'
import {BsBoxSeam,BsBarChart,BsMailbox,BsBriefcase} from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className="sidebar-wrapper">
          {/* Dashboard */}
            <div className="sidebar-menu">
              <h3 className="sidebar-title">Dashboard</h3>
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <MdLineStyle className='sidebar-list-icon' />
                  Home
                </li>
                <li className="sidebar-list-item">
                  <MdShowChart className='sidebar-list-icon'/>
                  Analytics
                </li>
                <li className="sidebar-list-item">
                  < FaChartLine className='sidebar-list-icon'/>
                  Sales
                </li>
              </ul>  
            </div>
            {/* Quick Menu */}
            <div className="sidebar-menu">
              <h3 className="sidebar-title">Quick Menu</h3>
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <FaRegUser className='sidebar-list-icon' />
                  Users
                </li>
                <li className="sidebar-list-item">
                  <BsBoxSeam className='sidebar-list-icon'/>
                  Products
                </li>
                <li className="sidebar-list-item">
                  < MdAttachMoney className='sidebar-list-icon'/>
                  Transactions
                </li>
                <li className="sidebar-list-item">
                  < BsBarChart className='sidebar-list-icon'/>
                  Reports
                </li>
              </ul>  
            </div>
            {/* Notifications */}
            <div className="sidebar-menu">
              <h3 className="sidebar-title">Dashboard</h3>
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <BsMailbox className='sidebar-list-icon' />
                  Mail
                </li>
                <li className="sidebar-list-item">
                  <MdFeedback className='sidebar-list-icon'/>
                  Feedback
                </li>
                <li className="sidebar-list-item">
                  < MdOutlineMessage className='sidebar-list-icon'/>
                  Messages
                </li>
              </ul>  
            </div>
            {/* Staff */}
            <div className="sidebar-menu">
              <h3 className="sidebar-title">Staff</h3>
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <BsBriefcase className='sidebar-list-icon' />
                  Manage
                </li>
                <li className="sidebar-list-item">
                  <MdShowChart className='sidebar-list-icon'/>
                  Analytics
                </li>
                <li className="sidebar-list-item">
                  < MdReportProblem className='sidebar-list-icon'/>
                  Reports
                </li>
              </ul>  
            </div>
        </div>
    </div>
  )
}
