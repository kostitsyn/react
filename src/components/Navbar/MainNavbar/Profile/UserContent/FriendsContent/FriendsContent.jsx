import React from "react";
import FriendContent from "./FriendContent/FriendContent";
import c from './FriendsContent.module.css';
import Preloader from '../../../../../common/Preloader/Preloader';

const FriendsContent = (props) => {
    if (!props.users.length) {
        return <Preloader />
    }
    let friends = [...props.friends];
    if (friends.length > 3) {
        while (friends.length !== 3) {
            let randomIndex = Math.floor(Math.random()*friends.length);
            friends.splice(randomIndex, 1);
        }
    }
    let filterFriends = props.users.filter(u => {
        if (friends.includes(u.id)) {
            return u;
        }
    });
    let friendElements = filterFriends.map(f => <FriendContent friend={f} key={f.id} />)
    return (
        <div>
            <span className={c.friendsLabel}>Friends {props.friends.length}</span>
            <div className={c.friends}>
                {friendElements}
            </div>
        </div>
    )
}

export default FriendsContent;