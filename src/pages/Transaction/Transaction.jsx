import "./transaction.css";

export default function Transaction() {
    const Button =  ({type}) =>{
        return <button className={" Tbtn " + type } > {type} </button>;
      };
      
  return (
    <div className="Transaction">
       <h3 className="Ttitle">Latest Transection</h3>
      
      <table className="Ttable">
        <tr className="Ttr">
          <th className="Tth">Customer</th>
          <th className="Tth">Date</th>
          <th className="Tth">Amount</th>
          <th className="Tth">Status</th>
        </tr>
        <tr className="Ttr">
          <td className="Tuser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU" alt="" className="Timage" />
            <span className="Tname">Susan Carol</span>
          </td>
          <td className="Tdate">2 JAN 2001</td>
           <td className="Tamount">$211.00</td>
           <td className="Tstatus">
            <Button type="Approved"/>
           </td>
        </tr>
        <tr className="Ttr">
          <td className="Tuser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU" alt="" className="Timage" />
            <span className="wlname">Susan Carol</span>
          </td>
          <td className="Tdate">2 JAN 2001</td>
           <td className="Tamount">$211.00</td>
           <td className="Tstatus">
            <Button type="Declined"/>
           </td>
        </tr>
        <tr className="Ttr">
          <td className="Tuser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU" alt="" className="Timage" />
            <span className="Tname">Susan Carol</span>
          </td>
          <td className="Tdate">2 MARCH 2001</td>
           <td className="Tamount">$11.00</td>
           <td className="Tstatus">
            <Button type="Pending"/>
           </td>
        </tr>
        <tr className="Ttr">
          <td className="Tuser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb57SPy6ne-CIDccMYhhEKiUb4-zWcNhSzQ&usqp=CAU"
             alt="" className="Timage" />
            <span className="Tname">Susan Carol</span>
          </td>
          <td className="Tdate">2 FEB 2002</td>
           <td className="Tamount">$211.00</td>
           <td className="Tstatus">
            <Button type="Approved"/>
           </td>
        </tr>
      </table>
    </div>
  )
}
