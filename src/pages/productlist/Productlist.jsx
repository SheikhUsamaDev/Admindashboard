import "./productlist.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { productRows } from "../../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Productlist() {

  const [data, setdata] = useState(productRows);

  const handleDelete = (id) =>  {
    setdata(data.filter((item) => item.id !== id ));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
     field: 'product', 
    headerName: 'Product',
     width: 200 ,
     renderCell: (params)=> {
    
      return(
        <div className="productlistuser"> 
        <img className="productlistimg" src={params.row.img} alt="" />
        {params.row.name}    
          </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'Active',
      headerName: 'Active',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/product/"+params.row.id}>
          <button className="produstlistedit">Edit</button>
          </Link>
          <DeleteOutline className="productlistdelete" 
           onClick={() => handleDelete(params.row.id)} />
          </>
        );
      }
    },
   
  ];

  return (
    <div className='productlist'>
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
