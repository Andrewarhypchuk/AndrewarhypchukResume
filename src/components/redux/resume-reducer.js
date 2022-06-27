
const ChangeName = "CHANGE-NAME";
const ChangeLevelOfEnglish = 'CHANGE-LEVEL-OF-ENGLISH';
const ChangeLevelOfUkraine = 'CHANGE-LEVEL-OF-UKRAINE';
const ChangeNumber = 'CHANGE-NUMBER';
const ChangeEmail = 'CHANGE-Email';
const ChangeHardSkills = 'CHANGE-HARD-SKILLS';
const ChangeSite = 'CHANGE-SITE';
const ChangeFreelanceTime = 'CHANGE-FREELANCE-TIME';
const ChangeIsUserLogged = 'CHANGE-IS-USER-LOGGED';
let initialState = {
    name:"ANDRII ARKHYPCHUK",
    levelofUkraine:'native',
    leveofEnglish:'upper-intermediate',
    number:"(096)-876-89-53",
    email:"andrewarhypchuk@gmail.com",
    hardSkills:[
        {value: 'HTML5/CSS3'},
        {value:'Javascript'},
        {value:'Javascript Animations'},
        {value:'Figma'},
        {value:'Responsive and Mobile Design'},
        {value:'React/Redux'},
        {value:'Testing and debugging'},
        {value:'Bootstrap/JQUERY'},
        {value:'Version Control/GIT'},
        {value:'TypeScript'},
        {value:'ES6+'}
    ],
    site:'https://github.com/Andrewarhypchuk',
    freelanceTime:'2 months',
    isUserLogged:false
}


const ResumeReducer = (state = initialState, action) => {

    switch (action.type) {
        case ChangeName:
            return {
                ...state, name: action.changeName
            }
        case ChangeLevelOfEnglish:
            return {
                ...state, leveofEnglish: action.changeLevelOfEnglish
            }
        case ChangeLevelOfUkraine:
            return {
                ...state, levelofUkraine: action.changeLevelOfUkraine
            }
        case ChangeNumber:
            return {
                ...state, number: action.changeNumber
            }
        case ChangeEmail:
            return {
                ...state, email: action.changeEmail
            }
        case ChangeHardSkills:
            return {
            ...state,
                hardSkills:state.hardSkills.map(
                    (item,i)=> i === action.number ? {...item, value:action.changeHardSkills} : item
                )

            }
        case ChangeSite:
            return {
                ...state, site: action.changeSite
            }
        case ChangeFreelanceTime:
            return {
                ...state, freelanceTime: action.changeFreelanceTime
            }
        case ChangeIsUserLogged:
            return {
                ...state, isUserLogged: action.changeIsUserLogged
            }
        default: return state;
    }
}
export const setChangeIsUserLoggedAC = ( changeIsUserLogged) => ({ type: ChangeIsUserLogged, changeIsUserLogged });
export const setChangeNameAC = ( changeName) => ({ type: ChangeName, changeName });
export const setChangeLevelOfEnglishAC = (changeLevelOfEnglish) => ({ type: ChangeLevelOfEnglish, changeLevelOfEnglish });
export const setChangeLevelOfUkraineAC = (changeLevelOfUkraine) => ({ type:ChangeLevelOfUkraine, changeLevelOfUkraine });
export const setChangeNumberAC = ( changeNumber) => ({ type: ChangeNumber, changeNumber });
export const setChangeEmailAC = ( changeEmail) => ({ type: ChangeEmail, changeEmail });
export const setChangeHardSkillsAC = ( changeHardSkills,number) => ({ type: ChangeHardSkills, changeHardSkills,number });
export const setChangeSiteAC = ( changeSite) => ({ type: ChangeSite, changeSite });

export const setChangeFreelanceTimeAC = ( changeFreelanceTime) => ({ type: ChangeFreelanceTime, changeFreelanceTime });
export default ResumeReducer;
