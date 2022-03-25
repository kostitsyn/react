import React from 'react';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ContentHeader = ({profile, statusText, userId, saveStatus, updateStatusText, status}) => {
    return (
        <div>
            <h3>{profile.fullName}</h3>
            <ProfileStatusWithHooks profile={profile} statusText={statusText} userId={userId}
            saveStatus={saveStatus} updateStatusText={updateStatusText} status={status} />
        </div>
    )
}

export default ContentHeader;