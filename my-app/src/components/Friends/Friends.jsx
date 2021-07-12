import c from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    let FriendsElements = props.friendItems.map(f => <FriendsItem state={f} key={f.id} />)
    return (
        <div className={c.friendsBlock}>
            <h3>Friends</h3>
            <div className={c.friends}>
                {FriendsElements}
            </div>

        </div>
    )
}

export default Friends;