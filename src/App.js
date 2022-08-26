import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import Review from "./component/Review/Review";
import Errow from "./component/Errow-page/Errow";
import Mange from "./component/Manage/Mange";
import DetalisProduct from "./component/Product-details/DetalisProduct";
import Shipment from "./component/Shipment/Shipment";
import Login from "./component/Login/Login";
import { createContext } from "react";
import {useState} from 'react';

export  const ContexApi = createContext()
function App() {
 const [userLoginInfo , setUserLoginInfo] = useState({}) ;
  return (
    <ContexApi.Provider value={[userLoginInfo , setUserLoginInfo] }>

      <Header></Header>

      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/shipment" element={<Shipment/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productKey" element={<DetalisProduct/>} />
        <Route path="/manage" element={<Mange />} />
        <Route path="*" element={<Errow />} />
      </Routes>
    </ContexApi.Provider>
  );
}

export default App;
