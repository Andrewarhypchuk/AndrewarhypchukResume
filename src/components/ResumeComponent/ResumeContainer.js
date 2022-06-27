import { connect } from 'react-redux';
import {
    setChangeNameAC, setChangeLevelOfEnglishAC, setChangeLevelOfUkraineAC, setChangeHardSkillsAC, setChangeNumberAC,
    setChangeFreelanceTimeAC, setChangeEmailAC, setChangeSiteAC, setChangeIsUserLoggedAC
} from '../redux/resume-reducer';
import ResumeComponent from "./ResumeComponent";


let mapStateToProps = (state) => {

    return{
        state:state.resumeInfo
    }
}

export default connect(mapStateToProps,{
    setName :setChangeNameAC,
    setEnglish :setChangeLevelOfEnglishAC,
    setUkraine:setChangeLevelOfUkraineAC,
    setHardSkills:setChangeHardSkillsAC,
    setNumber:setChangeNumberAC,
    setFreelanceTime:setChangeFreelanceTimeAC,
    setEmail:setChangeEmailAC,
    setSite:setChangeSiteAC,
    setIsUserLogged:setChangeIsUserLoggedAC
})(ResumeComponent);