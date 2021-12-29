import React from 'react';

const DialogItem = (props) => {
    return (
        <div>
            {props.id}: {props.message}
        </div>
    )
}

export default DialogItem;