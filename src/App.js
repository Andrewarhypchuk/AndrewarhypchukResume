
import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import {RouteConst} from "./components/common/Routes/RouteConst";
import PrivatRoute from "./components/PrivateAdminRoute/PrivateRoute";
import ResumeContainer from "./components/ResumeComponent/ResumeContainer";
import AdminContainer from "./components/AdminComponent/AdminContainer";
import LoginContainer from "./components/LogIn/LoginContainer";
import PrivateRouteContainer from "./components/PrivateAdminRoute/PrivateRouteContainer";
const App = (props) => {
    return (
  <BrowserRouter >
     <div className="app-wrapper">
     <div className='app-wrapper-content'>
     <Routes>
         <Route path={RouteConst.MAIN} element={  <ResumeContainer />}/>
         <Route path={RouteConst.LOGIN} exact element={ <LoginContainer />} />
         <Route path={RouteConst.RESUME} exact element={ <ResumeContainer  />} />
         <Route element={<PrivateRouteContainer />} >
             <Route path={RouteConst.ADMIN} exact element={ <AdminContainer />} />
         </Route>
    </Routes>
       </div>
    </div>
     </BrowserRouter>
  );
}
export default App;
