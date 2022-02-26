import React from 'react';
import ProfileStatus from './ProfileStatus';

const ContentHeader = (props) => {
    return (
        <div>
            <h3>{props.profile.fullName}</h3>
            <ProfileStatus profile={props.profile} statusText={props.statusText} userId={props.userId}
            saveStatus={props.saveStatus} updateStatusText={props.updateStatusText} status={props.status} />
        </div>
    )
}

export default ContentHeader;