import React from 'react';
import c from './Content.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ContentHeader from "./ContentHeader/ContentHeader";
import Preloader from '../../../../common/Preloader/Preloader';
import yes from '../../../../../assets/images/yes.webp';
import no from '../../../../../assets/images/no.gif';

const Content = ({userId, onURLid, profile, status, saveStatus, updateStatusText}) => {
        if (!userId && !onURLid) {
             return <Preloader />
        }
        let contacts = Object.keys(profile.contact).map((k, v) => <div key={k}>{k}: {profile.contact[k]}</div>)
        return (
        <div className={c.content}>
            <ContentHeader userId={userId} status={status} saveStatus={saveStatus} profile={profile}
            updateStatusText={updateStatusText} />
            <div className={c.foundJob}>
                <div>Ищу работу:</div>
                {profile.lookingForAJob
                ? <img src={yes} alt='yes'/>
                : <img src={no} alt='no'/>
                }
            </div>
            {profile.lookingForAJob
            ? <div>Описание искомой работы: {profile.lookingForAJobDescription}</div>
            : undefined
            }
            <div>Контакты:</div>
            {contacts}
            <div>User photos</div>
            <MyPostsContainer/>
        </div>
    )
}

export default Content;