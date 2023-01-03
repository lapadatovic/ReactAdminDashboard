import React from 'react'
import './user.css'
import {MdPublish, MdOutlinePermIdentity, MdPhonelinkRing, MdOutlineEmail,MdOutlineLocationOn} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='user-container'>
        <div className="user-title-container">
          <h1 className="user-title">Edit User</h1>
          <Link to='/newUser'>
            <button className="user-add-button">Create</button>
          </Link>
        </div>
        <div className="user">
          <div className="user-show">
            <div className="user-show-top">
              <img className="user-show-img" src="/assets/person/8.jpeg" alt=""  />
              <div className="user-show-top-title">
                <span className="user-show-username">Anna Becker</span>
                <span className="user-show-specialist">Software Engineer</span>
              </div>
            </div>
            <div className="user-show-bottom">
            <span className="user-show-bottom-title">Account Details</span>
              <div className='user-show-bottom-info'>
                <MdOutlinePermIdentity className='user-show-bottom-icon'/>
                <span className="user-show-bottom-info-title">annabecker99</span>
              </div>
              <div className='user-show-bottom-info'>
                <FaBirthdayCake className='user-show-bottom-icon'/>
                <span className="user-show-bottom-info-title">25.06.1999</span>
              </div>
              <span className="user-show-bottom-title">Contact Details</span>
              <div className='user-show-bottom-info'>
                <MdPhonelinkRing className='user-show-bottom-icon'/>
                <span className="user-show-bottom-info-title">+43-855-669</span>
              </div>
              <div className='user-show-bottom-info'>
                <MdOutlineEmail className='user-show-bottom-icon'/>
                <span className="user-show-bottom-info-title">annabecker99@gmail.com</span>
              </div>
              <div className='user-show-bottom-info'>
              <MdOutlineLocationOn className='user-show-bottom-icon'/>
                <span className="user-show-bottom-info-title">Sonnleitergasse 101/2</span>
              </div>
            </div>
          </div>
          <div className="user-update">
            <span className="user-update-title">Edit</span>
            <form className="user-update-form">
              <div className="user-update-left">
                <div className="user-update-item">
                  <label>Username</label>
                  <input className='user-upadate-input' type="text" placeholder='annabecker99' />
                </div>
                <div className="user-update-item">
                  <label>Full Name</label>
                  <input className='user-upadate-input' type="text" placeholder='Anna Becker' />
                </div>
                <div className="user-update-item">
                  <label>Email Address</label>
                  <input className='user-upadate-input' type="text" placeholder='annabecker99@gmail.com' />
                </div>
                <div className="user-update-item">
                  <label>Phone Number</label>
                  <input className='user-upadate-input' type="text" placeholder='+43-855-669' />
                </div>
                <div className="user-update-item">
                  <label>Address</label>
                  <input className='user-upadate-input' type="text" placeholder='Sonnleitergasse 101/2' />
                </div>
              </div>
              <div className="user-update-right">
                <div className="user-update-upload">
                  <img className='user-update-upload-img' src="/assets/person/8.jpeg" alt="" />
                  <label htmlFor="file"> 
                    <MdPublish className='user-update-upload-icon'/> 
                  </label>
                  <input type="file" 
                    id='file' 
                    style={ {display:'none'} }
                  />
                </div>
                <button className='user-update-button'>Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
