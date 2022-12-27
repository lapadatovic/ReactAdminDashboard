import React from 'react'
import './sidebar.css'
import {MdShowChart,MdLineStyle } from 'react-icons/md'
import {FaChartLine} from 'react-icons/fa'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
              <h3 className="sidebar-title">Dashboard</h3>
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <MdLineStyle />
                  Home
                </li>
                <li className="sidebar-list-item">
                  <MdShowChart />
                  Analytics
                </li>
                <li className="sidebar-list-item">
                  < FaChartLine />
                  Sales
                </li>
              </ul>  
            </div>
        </div>
    </div>
  )
}
