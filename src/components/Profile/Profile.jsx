import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={c.profile}>
            <UserContent/>
            <Content/>
        </div>
    )
}

export default Profile;