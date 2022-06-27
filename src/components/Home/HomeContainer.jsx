import { connect } from 'react-redux';
import {setIsFetchingAC, setAccountsAC, setCurrentValueAC} from '../redux/resume-reducer';
import HomeComponent from "./HomeComponent";

let mapStateToProps = (state) => {
    console.log(state)
    return{
        currentValue:state.accounts.currentValue
    }
}

export default connect(mapStateToProps,{
    setAccounts :setAccountsAC,
    toggleIsFetching :setIsFetchingAC,
    changeCurrentValue:setCurrentValueAC

})(HomeComponent);