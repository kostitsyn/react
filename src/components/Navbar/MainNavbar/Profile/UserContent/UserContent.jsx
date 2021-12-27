import React from 'react';
import c from './UserContent.module.css';

const UserContent = () => {
    return (
        <div className={c.userContent}>
            <div className={c.avatar}>
                <img src={require('../../../../../images/ava.jpg')} alt='avatar'/>
            </div>
            <div>
                Presents
            </div>
            <div>
                Friends
            </div>
            <div>
                Friends online
            </div>
            <div>
                Subscriptions
            </div>
            <div>
                Video
            </div>
            <div>
                Audio
            </div>
        </div>
    )
}

export default UserContent;