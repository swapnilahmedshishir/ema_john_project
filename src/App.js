import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import {Routes, Route, Router } from "react-router-dom";
import Review from "./component/Review/Review";
import Errow from "./component/Errow-page/Errow";
import Mange from "./component/Manage/Mange";
import DetalisProduct from "./component/Product-details/DetalisProduct";
import Shipment from "./component/Shipment/Shipment";
import Login from "./component/Login/Login";
import { createContext } from "react";
import {useState} from 'react';
import PrivateRouters from "./component/PrivateRouter/PrivateRouters";

export  const UserContexApi = createContext()
function App() {
 const [userLoginInfo , setUserLoginInfo] = useState({}) ;
 console.log(userLoginInfo);
  return (
    <UserContexApi.Provider value={[userLoginInfo , setUserLoginInfo] }>
      <h1>Email:{userLoginInfo.email}</h1>     
     
      <Header></Header>
      
      <Routes>      
        <Route exact path="/" element={<Shop />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouters/>}>
          <Route path="/shipment" element={<Shipment/>} />
          
        </Route>
        <Route path="/product/:productKey" element={<DetalisProduct/>} />
        <Route path="/manage" element={<Mange />} />
        <Route path="*" element={<Errow />} />
      </Routes>
      
      
    </UserContexApi.Provider>
  );
}

export default App;