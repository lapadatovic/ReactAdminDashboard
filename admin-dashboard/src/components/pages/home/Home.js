import React from 'react'
import './home.css'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import {userData} from '../../../dummyData'
import WidgetSmall from '../../widgetSmall/WidgetSmall'
import WidgetLarge from '../../widgetLarge/WidgetLarge'

export default function Home() {

  console.log(userData)

  return (
    <div className='home-container'>
      <FeaturedInfo />
      <Chart title='User Analytics'
         data={userData}
         dataKey ='Active User'
         grid='5 5' />
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}
