import React from 'react'
import "./sidebar.css"
import {LineStyle , Timeline , TrendingUp , Person , 
    HomeRepairService, Report ,
    Storefront , DynamicFeed , 
    Message , BarChart , 
    Mail , AttachMoney} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Dashboard</h3>
            <ul className="sidebarlist">
            <Link to="/home" className='link'>
                <li className="listItem ">
                  <LineStyle className='sidebaricon'/>
                   home
                </li>
                </Link>
                <Link to="/analaytics" className='link'>
                <li className="listItem ">
                  <Timeline className='sidebaricon'/>
                   Analaytics
                </li>
                </Link>
                <Link to="/sales" className='link'>
                <li className="listItem ">
                  <TrendingUp className='sidebaricon'/>
                   Sales
                </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Quick Menu</h3>
            <ul className="sidebarlist">
              <Link to="/users" className='link'>
                <li className="listItem ">
                  <Person className='sidebaricon' />
                   Users
                </li>
                </Link>
                <Link to="/products" className='link'>
                <li className="listItem ">
                  <Storefront className='sidebaricon'/>
                   Products
                </li>
                </Link>
                <Link to="/transaction" className='link'>
                <li className="listItem">
                  <AttachMoney className='sidebaricon'/>
                   Transaction
                </li>
                </Link>
                <Link to="/reports" className='link'>
                <li className="listItem">
                  <BarChart className='sidebaricon'/>
                   Reports
                </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Notifications</h3>
            <ul className="sidebarlist">
            <Link to="/mails" className='link'>
                <li className="listItem ">
                  <Mail className='sidebaricon' />
                   Mail
                </li>
                </Link>
                <Link to="/feedback" className='link'>
                <li className="listItem ">
                  <DynamicFeed className='sidebaricon'/>
                   FeedBack
                </li>
                </Link>
                <Link to="/messages" className='link'>
                <li className="listItem">
                  <Message className='sidebaricon'/>
                   Messege
                </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Staff</h3>
            <ul className="sidebarlist">
            <Link to="/manage" className='link'>
                <li className="listItem ">
                  <HomeRepairService className='sidebaricon' />
                   Manage
                </li>
                </Link>
                <Link to="/reports" className='link'>
                <li className="listItem">
                  <Report className='sidebaricon'/>
                   Reports
                </li>
                </Link>
            </ul>
        </div>
        
      </div>
    </div>
  )
}
