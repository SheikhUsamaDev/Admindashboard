import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language , Settings } from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
            <span className="logo">
                Admin
            </span>
        </div>
        <div className="right">
            <div className="icons">
            <NotificationsNone/>
            <div className="iconbadge">5</div>
             </div>
             <div className="icons">
            <Language/>
            <div className="iconbadge">2</div>
             </div>
             <div className="icons">
            <Settings/>
           </div>
           <img src="assest/man.png" alt="" className="avatar" />
        </div>
      </div>
    </div>
  )
};
