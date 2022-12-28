import React from 'react'
import './widgetSmall.css'
import {MdOutlineVisibility } from 'react-icons/md'
export default function WidgetSmall() {
  return (
    <div className='widget-small-container'>
        <span className="widget-small-title"> New Join Member</span>
        <ul className="widget-small-list">
            <li className="widget-small-list-item">
                <img className="widget-small-img" src="/assets/person/1.jpeg" alt="" />
                <div className="widget-small-user">
                    <span className="widget-small-username">Anna Keler</span>
                    <span className="widget-small-position">Software Engineer</span>
               </div>
               <button className="widget-small-button"> <MdOutlineVisibility className='widget-small-visibility-icon'/> Display</button>
            </li>
            <li className="widget-small-list-item">
                <img className="widget-small-img" src="/assets/person/1.jpeg" alt="" />
                <div className="widget-small-user">
                    <span className="widget-small-username">Anna Keler</span>
                    <span className="widget-small-position">Software Engineer</span>
               </div>
               <button className="widget-small-button"> <MdOutlineVisibility className='widget-small-visibility-icon'/> Display</button>
            </li>
            <li className="widget-small-list-item">
                <img className="widget-small-img" src="/assets/person/1.jpeg" alt="" />
                <div className="widget-small-user">
                    <span className="widget-small-username">Anna Keler</span>
                    <span className="widget-small-position">Software Engineer</span>
               </div>
               <button className="widget-small-button"> <MdOutlineVisibility className='widget-small-visibility-icon'/> Display</button>
            </li>
            <li className="widget-small-list-item">
                <img className="widget-small-img" src="/assets/person/1.jpeg" alt="" />
                <div className="widget-small-user">
                    <span className="widget-small-username">Anna Keler</span>
                    <span className="widget-small-position">Software Engineer</span>
               </div>
               <button className="widget-small-button"> <MdOutlineVisibility className='widget-small-visibility-icon'/> Display</button>
            </li>
            <li className="widget-small-list-item">
                <img className="widget-small-img" src="/assets/person/1.jpeg" alt="" />
                <div className="widget-small-user">
                    <span className="widget-small-username">Anna Keler</span>
                    <span className="widget-small-position">Software Engineer</span>
               </div>
               <button className="widget-small-button"> <MdOutlineVisibility className='widget-small-visibility-icon'/> Display</button>
            </li>
        </ul>
    </div>
  )
}
