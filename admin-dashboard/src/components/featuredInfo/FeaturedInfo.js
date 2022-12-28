import React from 'react'
import './featuredInfo.css'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

export default function FeaturedInfo() {
  return (
    <div className='featured-container'>
        {/* Revenue */}
        <div className="featured-item">
            <span className="featured-title">Revenue</span>
            <div className="featured-money-container">
                <span className='featured-money'> $2,454</span>
                <span className='featured-money-rate'>
                    -11.4
                    <AiOutlineArrowDown className='featured-icon minus'/>
                </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
        </div>
        {/* Sales */}
        <div className="featured-item">
            <span className="featured-title">Sales</span>
            <div className="featured-money-container">
                <span className='featured-money'> $4,454</span>
                <span className='featured-money-rate'>
                    -1.4
                    <AiOutlineArrowDown className=' featured-icon minus'/>
                </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
        </div>
        {/* Cost */}
        <div className="featured-item">
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
                <span className='featured-money'> $2,023</span>
                <span className='featured-money-rate'>
                    +2.1
                    <AiOutlineArrowUp className='featured-icon plus'/>
                </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
        </div>
    </div>
  )
}
