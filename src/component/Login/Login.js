import React, { useContext, useState } from "react";
import "./Login.css";
import { getFirestore} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
  } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContexApi } from "../../App";
import { useNavigate } from "react-router-dom";


  const app = initializeApp(firebaseConfig);
 getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();


const Login = () => {
  //contex user 
  const [userLoginInfo , setUserLoginInfo] = useContext(UserContexApi);
  const navigate = useNavigate();


 
  //form user 
    const [newUser, setNewUser]= useState(false);

    const [user, setUser] = useState({
      singIN: false,
      name: "",
      email: "",
    });
 // google proverdr SineIN
    const singInBtn = () => {
        signInWithPopup(auth, provider)
          .then((res) => {
            const { uid, email, displayName, photoURL } = res.user;
            const UserInfo = {
              singIN: true,
              name: displayName,
              email: email,
              image: photoURL,
            };
            setUser(UserInfo);
            console.log(uid, email, displayName);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      // from sinIN user 

      const authValid = (e) =>{
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
              .then((res) => {
                const userInfo = {...user}; 
                userInfo.success = true;
                userInfo.error = '';        
                setUser(userInfo);
                setUserLoginInfo(userInfo);
              })
              .catch((error) => {
                const userInfo = {...user};
                userInfo.error = error.code;
                userInfo.success = false;
                setUser(userInfo)
                
              });
          }
          if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(auth, user.email, user.password)
              .then((res) => {
                const userInfo = {...user}; 
                userInfo.success = true;
                userInfo.error = '';        
                setUser(userInfo);
                setUserLoginInfo(userInfo);
                navigate(-2);
                
                 
                
              })
                .catch((error) => {
                  const userInfo = {...user};
                userInfo.error = error.code;
                userInfo.success = false;
                setUser(userInfo)
                 
                });
          }

        e.preventDefault();
      };

      //from validation

      const valueGenarate = (e) => {
        let validationCheck = true;
        if (e.target.name === "email") {
          validationCheck =
            /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(
              e.target.value
            );
        }
        if (e.target.name === "password") {
          const PassWordValidation = e.target.value.length > 8;
          const GenarteNumberPsw = /\d{1}/.test(e.target.value);
          validationCheck = PassWordValidation && GenarteNumberPsw;
        }
    
        if (validationCheck) {
          const userInfo = { ...user };
          userInfo[e.target.name] = e.target.value;
          setUser(userInfo);
        }
      };

      const fbSingIN =()=> {
        alert("Facebook Sine IN Comming Soon....!")
      }
    

  return (
    <div className="Login">
      <h1>Login to Your Account</h1>
      <p>Login using social network</p>
      <button className="Order_btn " onClick={singInBtn}>
        <img
          src="https://img.icons8.com/windows/24/000000/google-plus.png"
          alt="GoogleIcon"
        />
      </button>
      <button className="Order_btn" onClick={fbSingIN}>
        <img
          src="https://img.icons8.com/material-rounded/24/000000/facebook-new.png"
          alt="facebookIcon"
        />
      </button>

      <span> - or -</span>

      <form className="formModify" onSubmit={authValid}>
        {newUser &&  <input
                className="mb-2 p-2 form-control"
                type="text"
                onBlur={valueGenarate}
                name="username"
                placeholder="Enter Your Username"
                required
            />}

        <br />
        <input
          className="mb-2 p-2 form-control"
          type="text"
          onBlur={valueGenarate}
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <br />
        <input
          className="mb-2 p-2 form-control"
          type="password"
          onBlur={valueGenarate}
          name="password"
          placeholder="Enter password"
          required
        />
        <span className="form-text">
          Must be 1 number & 8 characters long.
        </span>

        <input className="m-2 Order_btn" type="submit"   value="SING IN" />
        
        <span className="text-primary"><input  type="checkbox" name="newUser"  onChange={() => setNewUser(!newUser)} /> new User SING UP </span>
        
      </form>
      { user.success && true ? <p style={{color:'green'}}>{newUser && true ? "SING UP" : "SING IN "} SuccessFully</p> :
      <p style={{color:'red'}}>{user.error}</p>}
    </div>
  ); 
};

export default Login;
