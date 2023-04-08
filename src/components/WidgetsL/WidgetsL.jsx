import "./widgetsL.css";

export default function WidgetsL() {

const Button =  ({type}) =>{
  return <button className={" wlbtn " + type } > {type} </button>;
};

  return (
    <div className="widgetsL">
      <h3 className="wltitle">Latest Transection</h3>
      
      <table className="wltable">
        <tr className="wltr">
          <th className="wlth">Customer</th>
          <th className="wlth">Date</th>
          <th className="wlth">Amount</th>
          <th className="wlth">Status</th>
        </tr>
        <tr className="wltr">
          <td className="wluser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU" alt="" className="wlimage" />
            <span className="wlname">Susan Carol</span>
          </td>
          <td className="wldate">2 JAN 2001</td>
           <td className="wlamount">$211.00</td>
           <td className="wlstatus">
            <Button type="Approved"/>
           </td>
        </tr>
        <tr className="wltr">
          <td className="wluser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU" alt="" className="wlimage" />
            <span className="wlname">Susan Carol</span>
          </td>
          <td className="wldate">2 JAN 2001</td>
           <td className="wlamount">$211.00</td>
           <td className="wlstatus">
            <Button type="Declined"/>
           </td>
        </tr>
        <tr className="wltr">
          <td className="wluser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU" alt="" className="wlimage" />
            <span className="wlname">Susan Carol</span>
          </td>
          <td className="wldate">2 JAN 2001</td>
           <td className="wlamount">$211.00</td>
           <td className="wlstatus">
            <Button type="Pending"/>
           </td>
        </tr>
        <tr className="wltr">
          <td className="wluser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU"
             alt="" className="wlimage" />
            <span className="wlname">Susan Carol</span>
          </td>
          <td className="wldate">2 JAN 2001</td>
           <td className="wlamount">$211.00</td>
           <td className="wlstatus">
            <Button type="Approved"/>
           </td>
        </tr>
      </table>
    
    </div>
  );
};
