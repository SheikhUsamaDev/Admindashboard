import { Publish } from "@mui/icons-material";
import "./newproducts.css";

export default function Newproducts() {
  return (
    <div className="newproducts">
      <div className="newproductcontainer">
      <h1 className="addnewproducttitle">New Product</h1>
       <form  className="productform">
          <div className="productformleft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stocks</label>
            <select name="instock" id="idstock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
          </div>
          <div className="productformright">
          <div className="productupload">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobuabiFQbcgw1KYbhWjR02gKX5Jh7ngNK9g&usqp=CAU" alt="" className="productimgupload" />
            <label for="file">
              <Publish className="productformicon"/>
            </label>
            <input type="file"  id="file" style={{display:"none"}} />
          </div>
          <button className="productbutton">Update</button>
          </div>
        </form>
        </div>
    </div>
  )
}
