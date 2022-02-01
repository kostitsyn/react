import React from 'react';

const ContentHeader = (props) => {
    return (
        <div>
            <h3>{props.profile.fullName}</h3>
            <h4>{props.profile.aboutMe}</h4>
        </div>
    )
}

export default ContentHeader;