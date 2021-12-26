import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";

const Profile = () => {
    return (
        <main className={c.profile}>
            <UserContent/>
            <Content/>
        </main>
    )
}

export default Profile;