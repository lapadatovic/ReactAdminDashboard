import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import {AiOutlineDelete} from 'react-icons/ai'
import {userRows} from '../../../dummyData'
import { Link } from 'react-router-dom';


export default function UserList() {

  const [data,setData]= useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 150, renderCell:(params)=>{
      return(
        <div className='userList-user'>
          <img className='userList-img' src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      haderName: "Transaction",
      width: 90,
    },
    {
      field: 'action',
      haderName: 'Action',
      width: 150,
      renderCell: (params) => {
        return(
          <div className='userList-action'>
            <Link to={'/user/'+params.row.id}>
              <button className='userList-edit-button'>Edit</button>
            </Link>
            <AiOutlineDelete className='userList-delete-button' onClick={()=>handleDelete(params.row.id)} />
          </div>
        )
      }
    }
  ];
  return (
    <div className='userlist-container'>
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


