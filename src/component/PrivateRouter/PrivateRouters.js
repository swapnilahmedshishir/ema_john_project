import React, { useContext } from "react";
import { Navigate, Outlet,} from "react-router-dom";
import { UserContexApi } from "../../App";

const PrivateRouters = () => {
   
  const [userLoginInfo] = useContext(UserContexApi);
  let  useInfomation = userLoginInfo.email ;
  
  return (

    useInfomation ? <Outlet/> : <Navigate to="/login" />

  )
  
 }
  

export default PrivateRouters;
