import React, {useState} from 'react';
import classes from './LogIn.module.css';
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';
import {auth} from "../../fireBase";
import { useNavigate} from "react-router-dom"

import {RouteConst} from "../common/Routes/RouteConst";

const LoginComponent = (props)=>{

    let navigate  = useNavigate();
    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');

    const login = async () =>{
          try{
              const user = await signInWithEmailAndPassword(
                  auth,
                  loginEmail,
                  loginPassword
              )
              localStorage.setItem('isLogged','true')
             navigate(RouteConst.ADMIN)
          }
          catch(error){
              console.log(error.message)
              props.setIsUserLogged(false)
              localStorage.setItem('isLogged','false')
              navigate(RouteConst.ADMIN)
          }
    }

    return(

            <div className={classes.loginContainer}>
                <div className={classes.loginHeader}>Login</div>
                <input className={classes.input} placeholder="    Email..." onChange={(event)=>{setLoginEmail(event.target.value)}}/>
                <input type="password" className={classes.input}  placeholder="   Password.." onChange={(event)=>{setLoginPassword(event.target.value)}} />
                <button className={classes.sendButton} onClick={login}>Go In</button>
            </div>

    )
}
export default LoginComponent;