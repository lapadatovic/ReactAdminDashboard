import React from 'react'
import './newUser.css'
export default function NewUser() {
  return (
    <div className='newUser-container'>
        <h1 className="newUser-title">New User</h1>
        <form className="newUser-form">
            <div className="newUser-item">
                <label>Username</label>
                <input type="text" placeholder='Username' />
            </div>
            <div className="newUser-item">
                <label>Full Name</label>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className="newUser-item">
                <label>Email </label>
                <input type="email" placeholder='Email' />
            </div>
            <div className="newUser-item">
                <label>Password </label>
                <input type="password" placeholder='Password' />
            </div>
            <div className="newUser-item">
                <label>Phone Number</label>
                <input type="text" placeholder='Phone Number' />
            </div>
            <div className="newUser-item">
                <label>Address</label>
                <input type="text" placeholder='Address' />
            </div>
            <div className="newUser-item">
                <label>Gender</label>
                <div className="newUser-genders-container">
                    <input type="radio" name='gender' id='male' value='male' />
                    <label for="male">Male</label>
                    <input type="radio" name='gender' id='female' value='female' />
                    <label for="female">Female</label>
                </div>
            </div>
            <div className="newUser-item">
                <label>Active</label>
                <select className='newUser-select' name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
        </form>
    </div>
  )
}
