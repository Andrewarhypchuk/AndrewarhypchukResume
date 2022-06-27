import React from 'react';
import {Outlet } from 'react-router-dom'
import ClosedAdminComponent from "../ClosedAdminComponent/ClosedAdminComponent";


const PrivatRoute = (props) => {

    return props.state.isUserLogged ? <Outlet /> : <ClosedAdminComponent />
}
export default PrivatRoute;