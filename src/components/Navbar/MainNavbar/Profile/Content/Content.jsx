import React from 'react';
import c from './Content.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ContentHeader from "./ContentHeader/ContentHeader";
import Preloader from '../../../../common/Preloader/Preloader';
import yes from '../../../../../assets/images/yes.webp';
import no from '../../../../../assets/images/no.gif';

const Content = (props) => {

        if (!props.users.length) {
            return <Preloader />
        }
        return (
        <div className={c.content}>
            <ContentHeader profile={props.profile} />
            <div>Ищу работу:</div>
            {props.profile.lookingForAJob
            ? <img src={yes}/>
            : <img src={no}/>
            }
            <div>User data</div>
            <div>User photos</div>
            <MyPostsContainer/>
        </div>
    )
}

export default Content;