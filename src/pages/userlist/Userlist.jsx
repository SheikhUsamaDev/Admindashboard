
import "./userlist.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { userRows } from "../../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Userlist() {
  
  const [data, setData] = useState(userRows);

  const handleDelete = (id) =>  {
    setData(data.filter((item) => item.id !== id ));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'Username', width: 200 , renderCell: (params)=> {
    
      return(
        <div className="ususer"> 
        <img className="usimg" src={params.row.Avatar} alt="" />
        {params.row.username}
           
          </div>
      )


    } },
    { field: 'Email', headerName: 'Email', width: 200 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'Transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/"+params.row.id}>
          <button className="usedit">Edit</button>
          </Link>
          <DeleteOutline className="usdelete" 
           onClick={() => handleDelete(params.row.id)} />
          </>
        );
      }
    },
   
  ];
  return (



    
    <div className="userlist">
        <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
