import React, {useState} from 'react';

import classes from "./Resume.module.css";
import {NavLink} from "react-router-dom";
import {RouteConst} from "../common/Routes/RouteConst";
import GoToLogOrAdmin from "../GoTOLogorAdminComponent/GotologOrAdminComponent";
const   ResumeComponent = (props)=>{
console.log(props)
    let skills = props.state.hardSkills;
    let allSkills = skills.map((item,index)=>{
        return <div className={classes.skillItem} key={index}>{item.value}</div>
    })

   return(
       <div className={classes.container}>
           <div className={classes.resumeRightSide}>
               <div className={classes.name}>
                   {props.state.name}
               </div>
               <div className={classes.job}>
                   FRONT END DEVELOPER
               </div>
               <div className={classes.languages}>
                   <div className={classes.languageHeader}>Languages</div>
                   <div>Ukrainian - {props.state.levelofUkraine}</div>
                   <div>English - {props.state.leveofEnglish}</div>
               </div>
               <div className={classes.softSkills}>
                  <p>  - Highly motivated, disciplined specialist</p>
                 <p>- I enjoy helping others</p>
                   <p> - Fluent in native and foreign languages:</p>
                   <p> English</p>
                   <p> -capable of working in a team or</p>
                   <p> individually;</p>
                   <p>-multitasking skill</p>
               </div>
               <div className={classes.contacts}>
               <div className={classes.contactsHeader} >Contacts</div>
               <div>Phone number: {props.state.number}</div>
               <div>Email: {props.state.email}</div>
               <div>Home address: Lviv ,Ukraine</div>
               <div>Linkedin: <a>https://www.linkedin.com/in/a
                   ndrii-arkhypchuk578603227</a></div>
               </div>
           </div>
           <div className={classes.resumeLeftSide}>
                       <div>
                           <p className={classes.hardSkillsHeader}>HARD SKILLS</p>
                          <div className={classes.skillsContainer}>
                              {allSkills}
                          </div>
                       </div>
                       <div className={classes.containerCourses}>
                           <p className={classes.coursesHeader}>COURSES</p>
                           <div className={classes.coursesText} >
                               <div>Logos It Academy</div>
                               <div>(Junior Front End Developer)</div>
                           </div>
                       </div>
                       <div className={classes.siteContainer}>
                           <p className={classes.siteHeader}>SITE</p>
                           <div className={classes.siteText}> {props.state.site}</div>
                       </div>
                       <div className={classes.experienceContainer}>
                           <div className={classes.experienceHeader}>EXPERINCE</div>
                           <div className={classes.experienceText}>EPAM(01.10.2021-01.02.2022) Trainee Front
                               End Developer Experience with Git( version
                               control system) , study of Flex and Grid
                               layout technologies, adaptive layout, basics
                               of OOP programming, Javascript
                               Freelance - {props.state.freelanceTime}</div>
                       </div>
                       <div className={classes.educationContainer}>
                           <div className={classes.educationHeader}>EDUCATION</div>
                           <div className={classes.educationText}>Danylo Halytsky Lviv National Medical
                               University Medicine 2018- 2024
                           </div>
                       </div>
                        <GoToLogOrAdmin isUserLogged={props.state.isUserLogged} />

           </div>
       </div>

   )

}

export default ResumeComponent;