
import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import "./home.css";
import   { userData } from "../../Dummydata";
import WidgetsS from "../../components/widgetsS/WidgetsS";
import WidgetsL from "../../components/WidgetsL/WidgetsL";

export default function home() {
  return (
    <div className="home">
      
      <Featuredinfo/>
      <Chart data={userData} title="User Analytics " grid dataKey="Active User" />
     <div className="homewidget">
      <WidgetsS/>
      <WidgetsL/>
     </div>
    </div>
  )
};
