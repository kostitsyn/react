import React from 'react';
import c from './Content.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ContentHeader from "./ContentHeader/ContentHeader";
import Preloader from '../../../../common/Preloader/Preloader';
import yes from '../../../../../assets/images/yes.webp';
import no from '../../../../../assets/images/no.gif';

const Content = (props) => {
        if (!props.userId && !props.onURLid) {
             return <Preloader />

        }
        let contacts = Object.keys(props.profile.contact).map((k, v) => <div key={k}>{k}: {props.profile.contact[k]}</div>)
        return (
        <div className={c.content}>
            <ContentHeader userId={props.userId} status={props.status} saveStatus={props.saveStatus} profile={props.profile}
            updateStatusText={props.updateStatusText} />
            <div className={c.foundJob}>
                <div>Ищу работу:</div>
                {props.profile.lookingForAJob
                ? <img src={yes} alt='yes'/>
                : <img src={no} alt='no'/>
                }
            </div>
            {props.profile.lookingForAJob
            ? <div>Описание искомой работы: {props.profile.lookingForAJobDescription}</div>
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