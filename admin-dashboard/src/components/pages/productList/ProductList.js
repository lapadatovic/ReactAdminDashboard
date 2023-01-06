import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete } from 'react-icons/ai'
import { productRows } from '../../../dummyData'
import { Link } from 'react-router-dom';

export default function ProductList() {

  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {field: 'productName', headerName: 'Product', width: 150,},
    { field: 'productImage', headerName: 'Image', width: 150, renderCell:(params)=>{
      return(
        <div className='productList-user'>
          <img className='productList-img' src={params.row.productImage} alt="" />
          {/* {params.row.productName} */}
        </div>
      )
    }},
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      haderName: "Price",
      width: 90,
    },
    {
      field: 'action',
      haderName: 'Action',
      width: 150,
      renderCell: (params) => {
        return(
          <div className='productList-action'>
            <Link to={'/product/'+params.row.id}>
              <button className='productList-edit-button'>Edit</button>
            </Link>
            <AiOutlineDelete className='productList-delete-button' onClick={()=>handleDelete(params.row.id)} />
          </div>
        )
      }
    }
  ];

  return (
    <div className='productList-container'>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
