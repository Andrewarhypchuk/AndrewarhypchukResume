

import React from 'react';
import preloader from '../../../assets/images/1486.gif';
import classes from './Preloader.module.css'

let Preloader = () => {
    return <img className={classes.preloader} src={preloader} alt="preloader"/>
}

export default Preloader;