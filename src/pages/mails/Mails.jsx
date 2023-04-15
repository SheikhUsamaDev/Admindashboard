
import "./mails.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { mailRows } from "../../Dummydata";

import { useState } from "react";
export default function Userlist() {
  
  const [data, setData] = useState(mailRows);

  const handleDelete = (id) =>  {
    setData(data.filter((item) => item.id !== id ));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'From', width: 200 , renderCell: (params)=> {
    
      return(
        <div className="ususer"> 
       
        {params.row.username}
           
          </div>
      )


    } },
    { field: 'Email', headerName: 'Mail', width: 400 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
    },
   
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
         
          <DeleteOutline className="usdelete" 
           onClick={() => handleDelete(params.row.id)} />
          </>
        );
      }
    },
   
  ];
  return (



    
    <div className="mails">
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
