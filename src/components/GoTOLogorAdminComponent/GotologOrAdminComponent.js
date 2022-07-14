import React from "react";
import {NavLink} from "react-router-dom";
import {RouteConst} from "../common/Routes/RouteConst";
import classes from "./GotologOrAdmin.module.css";


const GoToLogOrAdmin =  (props) =>{
    console.log(localStorage.getItem('isLogged'))
    if (localStorage.getItem('isLogged') === true ){
        return(

        <NavLink  to={RouteConst.ADMIN} className={classes.logIn}>
            <div>To Admin Page</div>
        </NavLink>
        )
    }else{
        return(
            <NavLink  to={RouteConst.ADMIN} className={classes.logIn}>
                <div>Log In</div>
            </NavLink>
        )
    }

}
export default GoToLogOrAdmin;