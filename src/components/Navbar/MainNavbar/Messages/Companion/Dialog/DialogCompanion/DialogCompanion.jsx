import React from 'react';
import c from './DialogCompanion.module.css';

const DialogCompanion = (props) => {
    return (
        <div className={c.companion}>
            <img src={props.companion.imgLink} alt='ava' />
            <span className={c.name}>{props.companion.name}</span>
            <span>{props.state.message}</span>
        </div>
    )
}

export default DialogCompanion;