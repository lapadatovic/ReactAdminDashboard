import React from 'react'
import './widgetLarge.css'
export default function WidgetLarge() {
  const Button = ({type}) => {
    return <button className={'widget-large-button '+ type}>{type}</button>
  }
  return (
    <div className='widget-large-container'>
      <h3 className="widget-large-title">Latest transactions</h3>
      <table className="widget-large-table">
        <tr className="widget-large-tr">
          <th className="widget-large-th">Customer</th>
          <th className="widget-large-th">Date</th>
          <th className="widget-large-th">Amount</th>
          <th className="widget-large-th">Status</th>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img src="/assets/person/8.jpeg" alt="" className="widget-large-img" />
            <span className="widget-large-name">Susan Carol</span>
          </td>
          <td className="widget-large-date">2 Jun 2021</td>
          <td className="widget-large-amount">$122.00</td>
          <td className="widget-large-status">
            <Button type="Aproved" />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img src="/assets/person/8.jpeg" alt="" className="widget-large-img" />
            <span className="widget-large-name">Susan Carol</span>
          </td>
          <td className="widget-large-date">2 Jun 2021</td>
          <td className="widget-large-amount">$122.00</td>
          <td className="widget-large-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-large-tr">
          <td className="widget-large-user">
            <img src="/assets/person/8.jpeg" alt="" className="widget-large-img" />
            <span className="widget-large-name">Susan Carol</span>
          </td>
          <td className="widget-large-date">2 Jun 2021</td>
          <td className="widget-large-amount">$122.00</td>
          <td className="widget-large-status">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  )
}
