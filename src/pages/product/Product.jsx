import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import {productData} from "../../Dummydata";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="producttitlecontainer">
        <h1 className="producttitle">Product</h1>
        <Link to="/newproducts">
        <button className="productaddbutton">Create</button>
        </Link>
      </div>
      <div className="producttop">
        <div className="producttopleft">
            <Chart  data={productData}  dataKey="Sales"  title="Sales Performance"/>
        </div>
        <div className="producttopright">
            <div className="productinfotop">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobuabiFQbcgw1KYbhWjR02gKX5Jh7ngNK9g&usqp=CAU" alt="" 
                className="productinfoimg" />
                <span className="productinfoname">Apple Airpods</span>
            </div>
            <div className="productinfobottom">
                <div className="productinfoitem">
                    <span className="productinfokey">id:</span>
                    <span className="productinfovalue">1234</span>
                </div>
                <div className="productinfoitem">
                    <span className="productinfokey">Sales:</span>
                    <span className="productinfovalue">51234</span>
                </div>
                <div className="productinfoitem">
                    <span className="productinfokey">Active:</span>
                    <span className="productinfovalue">Yes</span>
                </div>
                <div className="productinfoitem">
                    <span className="productinfokey">In Stock:</span>
                    <span className="productinfovalue">No</span>
                </div>
            </div>
        </div>

      </div>
      <div className="productbottom">
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
