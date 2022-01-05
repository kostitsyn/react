import React from 'react';

const ContentHeader = (props) => {
    return (
        <h3>{props.currentUser.name}</h3>
    )
}

export default ContentHeader;