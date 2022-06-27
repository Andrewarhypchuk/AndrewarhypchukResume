import { connect } from 'react-redux';
import {
   setChangeIsUserLoggedAC
} from '../redux/resume-reducer';

import LoginComponent from "./LoginComponent";


let mapStateToProps = (state) => {
    return{
        state:state.resumeInfo
    }
}

export default connect(mapStateToProps,{
    setIsUserLogged:setChangeIsUserLoggedAC
})(LoginComponent);