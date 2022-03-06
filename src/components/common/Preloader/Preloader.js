import React from 'react';
import preloader from '../../../assets/images/Rocket.gif';
import c from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div className={c.spinnerBox}>
          <div className={c.leoBorder1}>
            <div className={c.leoСore1}></div>
          </div>
          <div className={c.leoBorder2}>
            <div className={c.leoCore2}></div>
          </div>
        </div>
    )
}

export default Preloader;