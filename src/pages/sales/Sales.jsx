
import "./sales.css";
import {  SalesData } from "../../Dummydata";
import SalesChart from "../../components/SalesChart/SalesChart";

export default function Analaytics() {
  return (
    <div className="analaytics">
      

      <SalesChart data={SalesData} title=" Sales Analytics " grid dataKey="Sales" />

    </div>
  )
}
