import c from './ProfileInfo.module.css';

const ProfileInfo = () =>
    <div>
        <div>
            <img src='https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg'></img>
        </div>
        <div className={c.profileInfo}>
            ava + description
        </div>
    </div>

export default ProfileInfo;