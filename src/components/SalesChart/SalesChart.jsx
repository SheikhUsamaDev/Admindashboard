import "./salesChart.css";
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';


export default function SalesChart({title , data , dataKey , grid }) {
  return (
    
       <div className="SalesChart">
      
      <h3 className="Ctitle">
       {title} 
       <ResponsiveContainer width="100%"  aspect={4/1}>
       <LineChart data={data}>
         <XAxis  dataKey="name" stroke="#5550bd"/>
         <Line  type="monotone"  dataKey={dataKey} stroke="#5550bd"/>
          <Tooltip/>
         { grid && < CartesianGrid  stroke="#e0dfdf"  strokeDasharray="5 5"/>}
       </LineChart>

       </ResponsiveContainer>

     </h3>
 </div>
    
  )
}
