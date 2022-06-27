
import React from 'react';
import classes from './Home.module.css';
import pigIcon from '../../img/HomePage/pig.svg';
import sendIcon from '../../img/HomePage/SendIconHome.svg';
import user1 from '../../img/HomePage/User1Foto.svg';
import user2 from '../../img/HomePage/User2Foto.svg';
import gap from '../../img/HomePage/gap.svg';
import money from '../../img/HomePage/money.svg';
import pigBank from '../../img/HomePage/pig-bank.svg';
import shareAccount1 from '../../img/HomePage/shareAccount1.svg';
import shareAccount2 from '../../img/HomePage/shareAccount2.svg';
import shareAccount3 from '../../img/HomePage/shareAccount3.svg';
import shareAccount4 from '../../img/HomePage/shareAccount4.svg';
import { NavLink } from 'react-router-dom';
const SendComponent = (props)=>{
    return(
        <div className={classes.homeContainer}>
            <div className={classes.upperPart}>
                <div className={classes.upperPartParagraph}>Balance</div>
                <div className={classes.upperPartInnerContainer} >
                    <div className={classes.money}>{props.currentValue}</div>
                    <div className={classes.pigContainer}>
                        <img src={pigIcon}></img>
                        <div>Top Up</div>
                    </div>
                </div>
                <div className={classes.upperPartText}>Quick Transaction</div>
            </div>
            <div className={classes.middlePart}>
                <NavLink  to='/send' className={classes.middlePartItemHyper}>
                    <img src={sendIcon}></img>
                    <div className={classes.hyperText}>Send Money</div>
                </NavLink>
                <div className={classes.middlePartItemUser}>
                    <img src={user1}></img>
                    <div>Leo W.</div>
                </div>
                <div className={classes.middlePartItemUser}>
                    <img src={user2}></img>
                    <div>Monica L.</div>
                </div>

            </div>
            <div className={classes.lowerPartItemUser}>
                <div className={classes.lowerPartItem}>
                    <div className={classes.lPart1}>
                        <img src={gap}></img>
                        <p className={classes.placeholder}>Account Type:</p>
                        <p className={classes.inputText}>Personal</p>
                    </div>
                    <div className={classes.lPart2}>
                        <img src={money}></img>
                        <p className={classes.placeholder}>Currency:</p>
                        <p className={classes.inputText}>Euro <bold>EUR</bold></p>
                    </div>
                </div>
                <div className={classes.lowerPartItem}>
                    <div className={classes.lPart1}>
                        <img src={pigBank}></img>
                        <p className={classes.placeholder}>Passive Saving</p>
                        <p className={classes.inputText}>Enabled 20%</p>
                    </div>
                    <div className={classes.lPart2}>
                        <p className={classes.placeholder}>Share Account</p>
                        <div  className={classes.shareAccounts}>
                            <img src={shareAccount1}></img>
                            <img src={shareAccount2}></img>
                            <img src={shareAccount3}></img>
                            <img src={shareAccount4}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SendComponent;