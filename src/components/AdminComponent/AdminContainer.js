import { connect } from 'react-redux';
import {setChangeNameAC, setChangeLevelOfEnglishAC,setChangeLevelOfUkraineAC,setChangeHardSkillsAC,setChangeNumberAC,
setChangeFreelanceTimeAC,setChangeEmailAC,setChangeSiteAC} from '../redux/resume-reducer';
import AdminComponent from "./AdminComponent";


let mapStateToProps = (state) => {
    console.log(state)
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
    setSite:setChangeSiteAC
})(AdminComponent);