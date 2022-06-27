import { connect } from 'react-redux';
import {
    setChangeIsUserLoggedAC
} from '../redux/resume-reducer';
import PrivateRoute from "./PrivateRoute";


let mapStateToProps = (state) => {

    return{
        state:state.resumeInfo
    }
}

export default connect(mapStateToProps,{
    setIsUserLogged:setChangeIsUserLoggedAC
})(PrivateRoute);