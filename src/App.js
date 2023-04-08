

import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Analaytics from "./pages/analaytics/Analaytics";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUserpage/NewUser";
import Newproducts from "./pages/newproducts/Newproducts";
import Product from "./pages/product/Product";
import Productlist from "./pages/productlist/Productlist";
import Sales from "./pages/sales/Sales";
import User from "./pages/user/User.jsx";
import Userlist from "./pages/userlist/Userlist.jsx"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        </Routes>
        
      </div>
     
    </BrowserRouter>
  );
}

export default App;
