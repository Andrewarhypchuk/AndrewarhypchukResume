import React, {createRef, useRef, useState} from 'react';
import classes from "./Admin.module.css";
import {NavLink} from "react-router-dom";
import {RouteConst} from "../common/Routes/RouteConst";
import {Helmet} from "react-helmet";
const   AdminComponent = (props)=>{

    let nameRef = createRef();
    function nameChanged(){
          props.setName(nameRef.current.value)
    }
    let englishRef = createRef();
    function englishChanged(){
        props.setEnglish(englishRef.current.value)
    }
    let ukraineRef = createRef();
    function ukraineChanged(){
        props.setUkraine(ukraineRef.current.value)
    }
    let numberRef = createRef();
    function numberChanged(){
        props.setNumber(numberRef.current.value)
    }
    let emailRef = createRef();
    function emailChanged(){
        props.setEmail(emailRef.current.value)
    }
    let siteRef = createRef();
    function siteChanged(){
        props.setSite(siteRef.current.value)
    }
    let freelanceRef = createRef();
    function freelanceChanged(){
        props.setFreelanceTime(freelanceRef.current.value)
    }
    let skillItemRef = createRef() ;
   function changeHardSkillsItem(numberItem){
 props.setHardSkills(listRef.current[numberItem].value,numberItem)
    }
    let skills = props.state.hardSkills;
   let listRef = useRef([])
    let allSkills = skills.map((item,index)=>{
        return <div key={index}><input onChange={ ()=>{ changeHardSkillsItem(index)}} ref={(ref)=>{(listRef.current[index] = ref)}}  className={classes.skillItem} key={index} value={item.value}></input></div>
    })
   return(
       <div className={classes.container}>
           <div className={classes.resumeRightSide}>
               <div  className={classes.admin}>Admin Page(able to change)</div>
               <input onChange={nameChanged} ref={nameRef} value={props.state.name} className={classes.name} />


               <div className={classes.job}>
                   FRONT END DEVELOPER
               </div>
               <div className={classes.languages}>
                   <div className={classes.languageHeader}>Languages</div>
                   <div>Ukrainian -<input onChange={ukraineChanged} ref={ukraineRef} className={classes.ukrInput}  value={props.state.levelofUkraine} /></div>
                   <div>English - <input onChange={englishChanged} ref={englishRef} className={classes.ukrInput} value={props.state.leveofEnglish} /></div>
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
               <div>Phone number: <input onChange={numberChanged} ref={numberRef} className={classes.ukrInput} value={props.state.number} /></div>
               <div>Email: <input onChange={emailChanged} ref={emailRef} className={classes.emailInput} value={props.state.email} /></div>
               <div>Home address: Lviv ,Ukraine</div>
               <div>Linkedin: <a>https://www.linkedin.com/in/a
                   ndrii-arkhypchuk578603227</a></div>
               </div>
           </div>
           <div  className={classes.resumeLeftSide}>
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
                           <div className={classes.siteText}>
                               <div>Site: <input onChange={siteChanged} ref={siteRef} className={classes.siteInput} value={props.state.site} /></div>
                       </div>
                       </div>
                       <div className={classes.experienceContainer}>
                           <div className={classes.experienceHeader}>EXPERINCE</div>
                           <div className={classes.experienceText}>EPAM(01.10.2021-01.02.2022) Trainee Front
                               End Developer Experience with Git( version
                               control system) , study of Flex and Grid
                               layout technologies, adaptive layout, basics
                               of OOP programming, Javascript
                               Freelance - <input onChange={freelanceChanged} ref={freelanceRef} className={classes.freeInput} value={props.state.freelanceTime} />
                           </div>
                       </div>
                       <div className={classes.educationContainer}>
                           <div className={classes.educationHeader}>EDUCATION</div>
                           <div className={classes.educationText}>Danylo Halytsky Lviv National Medical
                               University Medicine 2018- 2024
                           </div>
                       </div>
               <NavLink to={RouteConst.RESUME} className={classes.logIn}>
                  <div>To Resume</div>
               </NavLink>
           </div>
          <Helmet>
           </Helmet>
       </div>

   )

}

export default AdminComponent;