import AnalayticsChart from "../../components/anaylaticChat/AnalayticChat";
import "./analaytics.css";
import { AnalayticsData } from "../../Dummydata";

export default function Analaytics() {
  return (
    <div className="analaytics">
      

      <AnalayticsChart data={AnalayticsData} title="User Analytics " grid dataKey="Active User" />

    </div>
  )
}
