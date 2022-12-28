import React from 'react'
import './widgetSmall.css'
import {MdOutlineVisibility } from 'react-icons/md'
export default function WidgetSmall() {
  return (
    <div className='widget-small-container'>
        <span className="widget-small-title"> New Join Member</span>
        <ul className="widget-small-list">
            <li className="widget-list-item">
                <img className="widget-small-img" src="/assets/person/1.jpeg" alt="" />
                <div className="widget-small-user">
                    <span className="widget-small-username">Anna Keler</span>
                    <span className="widget-small-title">Software Engineer</span>
                    <button className="small-button"> <MdOutlineVisibility/> Display</button>
               </div>
            </li>
            
        </ul>
    </div>
  )
}
