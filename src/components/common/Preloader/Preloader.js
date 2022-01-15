import React from 'react';
import preloader from '../../../assets/images/Rocket.gif';

let Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'red'}}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;