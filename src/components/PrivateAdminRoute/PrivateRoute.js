import React from 'react';
import {Outlet } from 'react-router-dom'
import ClosedAdminComponent from "../ClosedAdminComponent/ClosedAdminComponent";


const PrivatRoute = (props) => {
     console.log(localStorage.getItem('isLogged'))
    if(localStorage.getItem('isLogged') ===  null || localStorage.getItem('isLogged') === 'false' ){
        return <ClosedAdminComponent />
    }else{
        return <Outlet />
    }

}
export default PrivatRoute;