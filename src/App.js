

import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Transaction from "./pages/Transaction/Transaction";
import Analaytics from "./pages/analaytics/Analaytics";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUserpage/NewUser";
import Newproducts from "./pages/newproducts/Newproducts";
import Product from "./pages/product/Product";
import Productlist from "./pages/productlist/Productlist";
import Sales from "./pages/sales/Sales";
import User from "./pages/user/User.jsx";
import Userlist from "./pages/userlist/Userlist.jsx"
import Reports from "./pages/reports/Reports.jsx";
import Mails from "./pages/mails/Mails.jsx";
import Messages from "./pages/messages/Messages.jsx";
import Manage from "./pages/manage/Manage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feedback from "./pages/Feedback/Feedback";

function App() {
  return (
    <BrowserRouter>
        <Topbar/>
    <div className="container">
       <Sidebar/>
       <Routes>
       <Route exact path='/' element={ <Home /> } />
       <Route path='/home' element={ <Home /> } />
       <Route path='/analaytics' element={ <Analaytics /> } />
       <Route path='/sales' element={ <Sales /> } />
       <Route path='/users' element={ <Userlist /> } />
       <Route path='/user/:userId' element={ <User /> } />
       <Route path='/newUser' element={ <NewUser /> } />
       <Route path='/products' element={ <Productlist /> } />
       <Route path='/product/:productID' element={ <Product /> } />
       <Route path='/newproducts' element={ <Newproducts /> } />
       <Route path='/transaction' element={ <Transaction /> } />
       <Route path='/reports' element={ <Reports /> } />
       <Route path='/mails' element={ <Mails /> } />
       <Route path='/feedback' element={ <Feedback /> } />
       <Route path='/messages' element={ <Messages /> } />
       <Route path='/manage' element={ <Manage /> } />
        </Routes>
        
      </div>
     
    </BrowserRouter>
  );
}

export default App;
