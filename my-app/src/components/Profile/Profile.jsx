import React from 'react';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () =>
    <div>
        <div>
            <img src='https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg'></img>
        </div>
        <div>
            ava + description
        </div>
        <textarea></textarea>
        <button>Добавить</button>
        <MyPosts />
    </div>

export default Profile;