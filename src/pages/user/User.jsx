import { Link } from "react-router-dom";
import "./user.css";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
export default function User() {
  return (
    <div className="user">
      <div className="userTitlecontainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser"> 
        <button className="userAddbtn">Create</button>
        </Link>
        
      </div>
      <div className="usercontainer">
        <div className="usershow">
            <div className="ustop">
            <img className="usTopimg" 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <div className="ustoptitle">
                <span className="usUsername">Anna Belly</span>
                <span className="usUsertitle">Software Engineer</span>
            </div>
            </div>
            <div className="usbottom">
                <div className="usershowinfo">
         <span className="usershowtitle">Account Details</span>
           </div>
           <div className="usershowinfo">
           <PermIdentity className="usershowIcon"/>
           <span className="usershowinfoT">annaback99</span>
           </div>
           <div className="usershowinfo">
           <CalendarToday className="usershowIcon"/>
           <span className="usershowinfoT">10 - 9 - 1999</span>
           </div>
           <span className="usershowtitle">Contact Details</span>
           <div className="usershowinfo">
           <PhoneAndroid className="usershowIcon"/>
           <span className="usershowinfoT">+97 45 345 35</span>
           </div>
           <div className="usershowinfo">
           <MailOutline className="usershowIcon"/>
           <span className="usershowinfoT">annaback99@gmail.com</span>
           </div>
           <div className="usershowinfo">
           <LocationSearching className="usershowIcon"/>
           <span className="usershowinfoT">New York / USA </span>
           </div>
            </div>
        </div>
        <div className="userupdate">
            <div className="userupdatetitle">Edit</div>
            <form  className="userupdateform">
                <div className="userupdateleft">
                    <div className="userupdateitem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder="annaback"
                        className="userupdateinput" />
                    </div>
                    <div className="userupdateitem">
                        <label>Full Name</label>
                        <input type="text" 
                        placeholder="Anna Belly"
                        className="userupdateinput" />
                    </div>
                    <div className="userupdateitem">
                        <label>Email</label>
                        <input type="text" 
                        placeholder="annaback99@gmail.com"
                        className="userupdateinput" />
                    </div>
                    <div className="userupdateitem">
                        <label>Phone</label>
                        <input type="text" 
                        placeholder="+97 45 345 35"
                        className="userupdateinput" />
                    </div>
                    <div className="userupdateitem">
                        <label>Address</label>
                        <input type="text" 
                        placeholder="New York / USA"
                        className="userupdateinput" />
                    </div>
                </div>
                <div className="userupdateright">
                    <div className="userupdateupload">
                        <img 
                        src="data:image/jpeg;base64,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"
                        className="userupdateimg"
                        alt="" />
                        <label htmlFor="file"> <Publish className="userupdateicons" /> </label>
                        <input type="file"  id="file" style={{display: "none"}}/>
                        
                    </div>
                    
                    <button className="userupdatebtn">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};
