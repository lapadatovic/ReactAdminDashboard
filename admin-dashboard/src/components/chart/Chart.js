import React from 'react'
import './chart.css'
import { LineChart,
   Line, XAxis, CartesianGrid,
   Tooltip, Legend, 
   ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {
console.log(dataKey)
  return (
    <div className='chart-container'>
        <h3 className="chart-title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
        >
          <XAxis dataKey="name" stroke='#5550bd' />
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
