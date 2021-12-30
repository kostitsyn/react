import React from "react";
import FriendContent from "./FriendContent/FriendContent";
import c from './FriendsContent.module.css';

const FriendsContent = (props) => {
    let friends = [...props.friends];
    if (friends.length > 3) {
        while (friends.length !== 3) {
            let spam = Math.floor(Math.random()*friends.length);
            let removeFriend = friends[spam];
            friends.splice(removeFriend, 1);
        }
    }
    let friendElements = friends.map(f => <FriendContent friend={f} key={f.id} />)
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