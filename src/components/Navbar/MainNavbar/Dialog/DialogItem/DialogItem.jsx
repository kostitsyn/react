import React from 'react';
import c from './DialogItem.module.css';

const DialogItem = (props) => {
    let companionId = props.companion.user_id;
    return (
        <div className={c.dialogItem}>
            <img src={props.companion.imgLink} alt='ava' />
            <span className={c.name}>{props.companion.name}</span>
            <span>{props.state.message}</span>
        </div>
    )
}

export default DialogItem;