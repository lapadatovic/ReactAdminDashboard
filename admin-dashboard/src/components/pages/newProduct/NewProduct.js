import React from 'react'
import './newProduct.css'
export default function NewProduct() {
  return (
    <div className='newProduct-container'>
        <h1 className="add-newProduct-title">New Product</h1>
        <form className="newProduct-form">
            <div className="add-newProduct-item">
                <label>Image</label>
                <input type="file" id='file' />
            </div>
            <div className="add-newProduct-item">
                <label>Name</label>
                <input type="text" placeholder='Item name'/>
            </div>
            <div className="add-newProduct-item">
                <label>Stock</label>
                <input type="text" placeholder='123'/>
            </div>
            <div className="add-newProduct-item">
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className='add-newProduct-item-button'>Create</button>
        </form>
    </div>
  )
}
