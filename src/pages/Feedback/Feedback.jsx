import "./feedback.css";
import { Feedbackdata } from "../../Dummydata";

export default function Feedback() {
  return (
    <div className='feedback'>
        
      <h1 className="feedbacktitle">FeedBacks</h1>
      
      <div className="feedbackcontainer">
        {Feedbackdata.map(d=>(

       
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
             <img className="feedbackuser"
              src={d.img} alt="" />
            </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3 className="h3feedback">{d.name}</h3>
            <h4 className=" h4feedback">{d.title}</h4>
          </div>
        </div>
         ))};
      </div>
      
    
    </div>
  )
}
