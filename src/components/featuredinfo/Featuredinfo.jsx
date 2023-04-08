import "./featuredinfo.css"
import { ArrowDownward , ArrowUpward } from '@mui/icons-material';
export default function Featuredinfo() {
  return (
    <div className="featuredinfo">
      <div className="featureditem">
        <span className="featuredtitle">Revenue</span>
        <div className="fcontainer">
            <span className="fmoney">$8,456</span>
            <span className="frate">-11.4  <ArrowDownward className="ficonN"/> </span>
        </div>
        <span className="featuredsub">Compared To Last Month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="fcontainer">
            <span className="fmoney">$2,456</span>
            <span className="frate">-1.4  <ArrowDownward className="ficonN"/> </span>
        </div>
        <span className="featuredsub">Compared To Last Month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Cost</span>
        <div className="fcontainer">
            <span className="fmoney">$8,456</span>
            <span className="frate">+11.4  <ArrowUpward className="ficon"/> </span>
        </div>
        <span className="featuredsub">Compared To Last Month</span>
      </div>
    </div>
  )
}
