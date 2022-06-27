import React, {createRef, useRef, useState} from 'react';
import classes from './Closed.module.css';
import {NavLink} from "react-router-dom";
import {RouteConst} from "../common/Routes/RouteConst";
const ClosedAdminComponent = ()=>{
    return(
        <div className={classes.container}>
            <div className={classes.text}>
                ...Oops..you are not logged...try again

            </div>
            <NavLink to={ RouteConst.LOGIN} >
                <div className={classes.log}>Try Again</div>
            </NavLink>
        </div>
    )
}
export default  ClosedAdminComponent