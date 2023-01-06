import React from 'react'
import './product.css'
import Chart from '../../chart/Chart'
import { Link, useParams } from 'react-router-dom'
import { productData ,productRows } from '../../../dummyData'



export default function Product() {
    let {productId} = useParams();
    let products = productRows;
    const product = products.filter((product) => product.id == productId)

  return (
    <div className='product-container'>
        <div className="product">
            <h1 className="product-title">{product[0].productName}</h1>
            <Link to='/newProduct'>
                <button className="product-add-button">Create</button>
            </Link>
        </div>
        <div className="product-top">
            <div className="product-top-left">
                <Chart 
                    title={product[0].productName}
                    grid='5 5'
                    data={productData}
                    dataKey='sales'
                />
            </div>
            <div className="product-top-right">
                <div className="product-info-top">
                    <img className="product-info-img" src={product[0].productImage} alt=""  />
                    <span className="product-name">{product[0].productName}</span>
                </div>
                <div className="product-info-bottom">
                    <div className="product.info-item">
                        <span className="product-info-value">Price:{product[0].price}</span>
                    </div>
                    <div className="product.info-item">
                        <span className="product-info-key">{product[0].stock ? `Stock: ${product[0].stock}` : 'Out of stock'}</span>
                        {/* <span className="product-info-value">Price:{product[0].price}</span> */}
                    </div>
                    <div className="product.info-item">
                        <span className="product-info-key">{product[0].stock ? 'Active' : 'Not active'}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-bottom">
            <form action="" className="product-form">
                 <div className="product-form-left">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder={product[0].productName}/>
                    <label>{product[0].stock ? `Stock: ${product[0].stock}` : 'Out of stock'}</label>
                    <select className="product-form-select" name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>{product[0].stock ? 'Active' : 'Not active'}</label>
                    <select className="product-form-select" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                 </div>
                 <div className="product-form-right">
                    <div className="product-upload"></div>
                 </div>
            </form>
        </div>
    </div>
  )
}
